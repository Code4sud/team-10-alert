import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './_utils/config/environment.config';

@Module({
  imports: [ConfigModule.forRoot({ validate: validateEnv, isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
