import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { EnvironmentVariables } from 'src/_utils/config/environment.config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(configService: ConfigService<EnvironmentVariables>) {
    super({
      datasources: {
        db: {
          url: configService.get('DATABASE_URL'),
        },
      },
    });
  }
}
