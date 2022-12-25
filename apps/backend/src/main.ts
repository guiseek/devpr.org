/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger, ValidationPipe} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import {AppModule} from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  )

  const config = new DocumentBuilder()
    .setTitle('DevPR')
    .setDescription('The DevPR API')
    .setVersion('1.0')
    .addTag('devpr.org')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  const port = process.env.PORT || 3333
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
}

bootstrap()
