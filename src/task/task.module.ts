import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { Task, TaskSchema } from './schema/task.schema';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    AuthModule,
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
