import { TaskService } from './task.service';
import { task, Prisma } from '@prisma/client';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(data: Prisma.taskCreateInput): Promise<task>;
    hoge(): Promise<task[]>;
    findOne(id: string): Promise<task>;
    update(id: string, data: Prisma.taskUpdateInput): Promise<task>;
    remove(id: string): Promise<task>;
}
