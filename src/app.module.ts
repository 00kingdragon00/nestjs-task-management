import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot('mongodb://localhost:27017/demo'),
  ],
})
export class AppModule {}
