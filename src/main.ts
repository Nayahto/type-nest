import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    origin: 'http://localhost:3000',
  });
  const config = new DocumentBuilder()
    .setTitle('Type Nest')
    .setDescription('APi nest js with typescript as main development language')
    .setVersion('1.0')
    .addTag('user')
    .addTag('profile')
    .addTag('game')
    .addTag('genre')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
