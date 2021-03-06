import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1596',
  database: 'taskmanagement',
  entities: [__dirname + '../**/*/entity.ts'],
  synchronize: true,
};
