import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class IngredientesService {
  constructor(private prisma: PrismaService) {}
  create(createIngredienteDto: CreateIngredienteDto) {
    return 'This action adds a new ingrediente';
  }

  async findAll() {
    const ingredientes = await this.prisma.ingrediente.findMany();
    
    // O seu Vue.js espera um objeto com arrays separados
    return {
      paes: ingredientes.filter(i => i.categoria === 'pao'),
      carnes: ingredientes.filter(i => i.categoria === 'carne'),
      opcionais: ingredientes.filter(i => i.categoria === 'opcional'),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} ingrediente`;
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    return `This action updates a #${id} ingrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingrediente`;
  }
}
