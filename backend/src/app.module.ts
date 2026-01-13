import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { PrismaService } from './prisma/prisma.service';
import { BurgersModule } from './burgers/burgers.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [IngredientesModule, BurgersModule, StatusModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
