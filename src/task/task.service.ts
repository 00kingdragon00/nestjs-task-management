import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTaskById(id: string): boolean {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks = this.tasks.slice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  updateTaskStatusById(id: string, status: TaskStatus): Task | string {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      this.tasks[index].status = status;
      return this.tasks[index];
    }
    return 'Task not found';
  }
}
