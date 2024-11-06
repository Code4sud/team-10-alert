import { Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';
import { Optional } from 'class-validator-extended';
import { exit } from 'process';

export class EnvironmentVariables {
  @IsNumber()
  PORT: number = 3000;

  @IsString()
  @Optional()
  DB_USER?: string;

  @IsString()
  @Optional()
  DB_PASSWORD?: string;

  @IsString()
  DB_HOST: string = 'localhost';

  @IsString()
  DB_NAME: string = 'team-10-hackathon';

  @IsString()
  @Optional()
  DB_URL?: string;
}

export function validateEnv(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length) {
    new Logger(validateEnv.name).error(errors.toString());
    exit();
  }
  return validatedConfig;
}
