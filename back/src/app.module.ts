import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './_utils/config/environment.config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ validate: validateEnv, isGlobal: true }), PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
