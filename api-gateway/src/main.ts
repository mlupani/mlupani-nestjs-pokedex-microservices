import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilters } from './common/filters/http-exception-filter';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilters());
  app.useGlobalInterceptors(new TimeoutInterceptor());
  await app.listen(process.env.PORT || 3000);
  console.log('API Gateway is listening on port ', process.env.PORT || 3000);
}
bootstrap();
