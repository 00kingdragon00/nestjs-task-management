import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schema/task.schema';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(Task.name) private userModel: Model<TaskDocument>) {}
}
