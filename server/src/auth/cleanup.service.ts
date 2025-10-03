import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CleanupService {
  private readonly logger = new Logger(CleanupService.name);

  constructor(private readonly prismaService: PrismaService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async cleanupUnverifiedUsers() {
    try {
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

      const deletedUsers = await this.prismaService.user.deleteMany({
        where: {
          isVerified: false,
          createdAt: {
            lt: tenMinutesAgo,
          },
        },
      });

      if (deletedUsers.count > 0) {
        this.logger.log(
          `Deleted ${deletedUsers.count} unverified users older than 10 minutes`,
        );
      }
    } catch (error) {
      this.logger.error('Error cleaning up unverified users:', error);
    }
  }

  async cleanupExpiredOtpCodes() {
    try {
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

      const updatedUsers = await this.prismaService.user.updateMany({
        where: {
          verificationCode: {
            not: null,
          },
          updatedAt: {
            lt: tenMinutesAgo,
          },
        },
        data: {
          verificationCode: null,
        },
      });

      if (updatedUsers.count > 0) {
        this.logger.log(
          `Cleared ${updatedUsers.count} expired OTP codes older than 10 minutes`,
        );
      }
    } catch (error) {
      this.logger.error('Error cleaning up expired OTP codes:', error);
    }
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async cleanupExpiredOtpCodesScheduled() {
    await this.cleanupExpiredOtpCodes();
  }
}
