import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  HttpStatus,
  HttpException,
  Get,
  HttpCode,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { OtpLoginDto } from './dto/otpLogin.dto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { Public } from './decorators/public.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthenticatedUser } from './interfaces/user.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Public()
  @Post('oauth/login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ transform: true }))
  async oauthLogin(@Body() user: CreateUserDto) {
    try {
      const { email, image, name } = user;

      if (!email || !image || !name) {
        throw new HttpException(
          {
            success: false,
            message:
              'Missing required fields: email, image, and name are required',
            error: 'MISSING_REQUIRED_FIELDS',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      const userExists = await this.authService.checkUserExists(email);

      if (userExists) {
        return {
          success: true,
          message: 'Logged in successfully',
          data: {
            user: {
              id: userExists.id,
              email: userExists.email,
              name: userExists.name,
              image: userExists.image,
              isVerified: userExists.isVerified,
            },
            token: this.jwtService.sign({
              userId: userExists.id,
              email: userExists.email,
            }),
          },
        };
      }

      const newUser = await this.authService.createUser({ email, image, name });

      return {
        success: true,
        message: 'Account created successfully',
        data: {
          user: {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            image: newUser.image,
            isVerified: newUser.isVerified,
          },
          token: this.jwtService.sign({
            userId: newUser.id,
            email: newUser.email,
          }),
        },
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        {
          success: false,
          message: 'Failed to process OAuth login',
          error: 'OAUTH_LOGIN_FAILED',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Public()
  @Post('otp/send')
  @UsePipes(new ValidationPipe({ transform: true }))
  async sendOtpCode(@Body() otpLoginDto: OtpLoginDto) {
    try {
      const result = await this.authService.sendOtpCode(otpLoginDto.email);
      return {
        success: true,
        message: result.message,
        data: {
          email: otpLoginDto.email,
          expiresIn: '10 minutes',
        },
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Failed to send OTP code',
          error: 'OTP_SEND_FAILED',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Public()
  @Post('otp/verify')
  @UsePipes(new ValidationPipe({ transform: true }))
  async verifyOtpCode(@Body() verifyOtpDto: VerifyOtpDto) {
    try {
      const result = await this.authService.verifyOtpCode(
        verifyOtpDto.email,
        verifyOtpDto.code,
      );

      return {
        success: true,
        message: result.message,
        data: {
          user: {
            id: result.user.id,
            email: result.user.email,
            name: result.user.name,
            isVerified: result.user.isVerified,
            createdAt: result.user.createdAt,
          },
          token: this.jwtService.sign({
            userId: result.user.id,
            email: result.user.email,
          }),
        },
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Failed to verify OTP code',
          error: 'OTP_VERIFICATION_FAILED',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('profile')
  getProfile(@CurrentUser() user: AuthenticatedUser) {
    return {
      success: true,
      message: 'Profile retrieved successfully',
      data: {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          isVerified: user.isVerified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      },
    };
  }
}
