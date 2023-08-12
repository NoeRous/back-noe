import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import * as moment from 'moment-timezone';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe());

  moment.tz.setDefault('America/La_Paz');

  const config = new DocumentBuilder()
  .setTitle('Sistema para Institucionalización')
  .setDescription('The  API description')
  .setVersion('1.0')
  .addTag('institucionalizacion')
  .addBearerAuth() // Habilitar el esquema de autenticación Bearer
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document)

  app.enableCors({
    allowedHeaders:"*",
    origin: "*"
  });
  app.use('/files', express.static('./uploads'));
  await app.listen(3000);
}
bootstrap();
