import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schema/task.schema';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TaskRepository {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async findOne(taskFilterQuery: FilterQuery<Task>): Promise<Task> {
    return this.taskModel.findOne(taskFilterQuery);
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = new this.taskModel();
    newTask.title = createTaskDto.title;
    newTask.description = createTaskDto.description;
    newTask.status = TaskStatus.OPEN;
    return newTask.save();
  }
}
