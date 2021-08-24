import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { task, Prisma } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// APIのリクエストを受け取る
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() data: Prisma.taskCreateInput): Promise<task> {
    return this.taskService.create(data);
  }

  @Get()
  async hoge(): Promise<task[]> {
    return this.taskService.hoge();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<task> {
    return this.taskService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.taskUpdateInput,
  ): Promise<task> {
    return this.taskService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<task> {
    return this.taskService.remove(+id);
  }
}
