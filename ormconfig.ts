import { DataSource } from 'typeorm';
import * as process from 'process';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { config } from 'dotenv';
config({ override: true, path: `.env.${process.env.NODE_ENV}` });

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  namingStrategy: new SnakeNamingStrategy(),
});
