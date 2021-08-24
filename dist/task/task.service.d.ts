import { PrismaService } from './../prisma.service';
import { task, Prisma } from '@prisma/client';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.taskCreateInput): Promise<task>;
    hoge(): Promise<task[]>;
    findOne(id: number): Promise<task>;
    update(id: number, data: Prisma.taskUpdateInput): Promise<task>;
    remove(id: number): Promise<task>;
}
