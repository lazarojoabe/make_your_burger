import { Injectable } from '@nestjs/common';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';
import { PrismaService } from '../prisma/prisma.service';
import { retry } from 'rxjs';

@Injectable()
export class BurgersService {
  constructor(private prisma: PrismaService) {}
  create(data: any) {
    return this.prisma.burger.create({ 
      data:{
        nome: data.nome,
        pao: data.pao,
        carne: data.carne,
        opcionais: data.opcionais.join(','),
        status: 'Solicitado';

      }
     });
  }

  findAll() {
    const pedidos = await this.prisma.burger.findMany();
    return pedidos.map(pedido => ({
      ...pedido,
      opcionais: pedido.opcionais ? pedido.opcionais.split(',') : [],
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} burger`;
  }

  update(id: number, data:{status: string}) {
    return this.prisma.burger.update({
      where: { id },
      data: { status: data.status },
    });
  }

  remove(id: number) {
    return this.prisma.burger.delete({ where: { id: id } });
  }
}
