import { registerAs } from '@nestjs/config';

// 默认配置值（配置文件中的值）
const defaultConfig = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'test_db',
};

export default registerAs('database', () => {
  // 环境变量优先，没有则使用默认配置
  const config = {
    host: process.env.DB_HOST || defaultConfig.host,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : defaultConfig.port,
    username: process.env.DB_USERNAME || defaultConfig.username,
    password: process.env.DB_PASSWORD || defaultConfig.password,
    database: process.env.DB_DATABASE || defaultConfig.database,
  };

  // 立即打印数据库配置信息
  console.log('========================================');
  console.log('📦 数据库配置信息已加载:');
  console.log(`   主机: ${config.host}`);
  console.log(`   端口: ${config.port}`);
  console.log(`   用户名: ${config.username}`);
  console.log(`   密码: ${'*'.repeat(config.password.length)}`);
  console.log(`   数据库: ${config.database}`);
  console.log('========================================');

  return config;
});
