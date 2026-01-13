import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [IngredientesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
