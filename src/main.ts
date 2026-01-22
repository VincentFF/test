import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
    logger.log(`🚀 应用已启动，监听端口: ${process.env.PORT ?? 3000}`);
  } catch (error) {
    logger.error('❌ 应用启动失败！');
    if (error instanceof Error) {
      logger.error(`错误信息: ${error.message}`);

      // 检查是否是数据库连接错误
      if (
        error.message.includes('ECONNREFUSED') ||
        error.message.includes('connect')
      ) {
        logger.error(
          '💡 提示: 请检查数据库连接配置是否正确，数据库服务是否正在运行',
        );
      }
    }
    process.exit(1);
  }
}

void bootstrap();
