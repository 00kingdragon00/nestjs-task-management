import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schema/task.schema';
import { TaskService } from './task.service';

@Controller('task')
@UseGuards(AuthGuard())
export class TaskController {
  constructor(private taskService: TaskService) {}

  // @Get()
  // getAllTasks(): Task[] {
  //   return this.taskService.getAllTasks();
  // }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.taskService.createTask(createTaskDto);
  // }

  // @Delete(':id')
  // deleteTaskByID(@Param('id') id: string): void {
  //   this.taskService.deleteTaskById(id);
  // }

  // @Patch(':id/status')
  // updateTaskStatusById(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  // ): Task {
  //   return this.taskService.updateTaskStatusById(id, status);
  // }
}
