import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { useContainer } from 'class-validator';
import { EnvironmentVariables } from './_utils/config/environment.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app
    .setGlobalPrefix('api/v1')
    .useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    )
    .enableCors();

  const config = new DocumentBuilder()
    .setTitle('CHIPS API')
    .setDescription('Routes description of the Chips API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/doc-swagger', app, document, {
    swaggerOptions: { persistAuthorization: true, filter: true },
  });

  app.use('/api/doc', apiReference({ spec: { content: document }, theme: 'moon' }));

  const configService = app.get(ConfigService<EnvironmentVariables, true>);
  await app.listen(configService.get('PORT'));
  Logger.debug(
    `\nServer running on http://localhost:${configService.get('PORT')}\nCheck the API documentation at http://localhost:${configService.get('PORT')}/api/doc`,
  );
}

bootstrap();
