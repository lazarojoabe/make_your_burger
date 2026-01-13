import { Module } from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { BurgersController } from './burgers.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [BurgersController],
  providers: [BurgersService, PrismaService],
})
export class BurgersModule {}
