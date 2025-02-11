import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Enable CORS
    app.enableCors({
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        "http://192.168.100.103:3001", //my local network I use with my phone
        "https://skivori-test-next.vercel.app", //deploy front-end cloud service
        ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
