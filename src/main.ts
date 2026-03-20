import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const port = Number(process.env.PORT ?? 3000);
  const host = '0.0.0.0';

  await app.listen(port, host);
  console.log(`Server is running on Localhost: http://localhost:${port}`);
  console.log(`Server is running on Host: http://${host}:${port}`);
}
bootstrap().catch((error) => {
  console.error(error);
  process.exit(1); // Exit the process with a failure code
});
