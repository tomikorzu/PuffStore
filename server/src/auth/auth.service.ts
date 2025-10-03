import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';
import { EmailService } from '../email/email.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  async createUser(user: CreateUserDto) {
    return await this.prismaService.user.create({
      data: { ...user, email: user.email! },
    });
  }

  async checkUserExists(email: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (user?.isVerified) {
      return user;
    }
    return null;
  }

  generateOtpCode(): string {
    return crypto.randomInt(100000, 999999).toString();
  }

  async sendOtpCode(
    email: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      let user = await this.prismaService.user.findUnique({ where: { email } });

      const otpCode = this.generateOtpCode();

      if (user) {
        await this.prismaService.user.update({
          where: { email },
          data: {
            verificationCode: otpCode,
            updatedAt: new Date(),
          },
        });
      } else {
        user = await this.prismaService.user.create({
          data: {
            email,
            verificationCode: otpCode,
            isVerified: false,
          },
        });
      }

      await this.emailService.sendOtpEmail(email, otpCode);

      return {
        success: true,
        message: 'Codigo OTP enviado correctamente a su correo',
      };
    } catch (e) {
      console.error(e);
      throw new BadRequestException('Error al enviar el codigo OTP');
    }
  }

  async verifyOtpCode(
    email: string,
    code: string,
  ): Promise<{ success: boolean; user: User; message: string }> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new BadRequestException('Usuario no encontrado');
      }

      if (!user.verificationCode) {
        throw new BadRequestException(
          'No se encontro un codigo OTP. Por favor solicite uno nuevo.',
        );
      }

      if (user.verificationCode !== code) {
        throw new BadRequestException('Codigo OTP incorrecto');
      }

      const verifiedUser = await this.prismaService.user.update({
        where: { email },
        data: {
          isVerified: true,
          verificationCode: null,
          updatedAt: new Date(),
        },
      });

      return {
        success: true,
        user: verifiedUser,
        message: 'Email verificado correctamente',
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error(error);
      throw new BadRequestException('Error al verificar el codigo OTP');
    }
  }
}
