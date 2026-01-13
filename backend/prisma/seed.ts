import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.ingrediente.createMany({
    data: [
      { tipo: 'Italiano Branco', categoria: 'pao' },
      { tipo: '3 Queijos', categoria: 'pao' },
      { tipo: 'Parmesão e Orégano', categoria: 'pao' },
      { tipo: 'Integral', categoria: 'pao' },

      { tipo: 'Maminha', categoria: 'carne' },
      { tipo: 'Alcatra', categoria: 'carne' },
      { tipo: 'Picanha', categoria: 'carne' },
      { tipo: 'Veggie', categoria: 'carne' },
      
      { tipo: 'Bacon', categoria: 'opcional' },
      { tipo: 'Salame', categoria: 'opcional' },
      { tipo: 'Cheddar', categoria: 'opcional' },
      { tipo: 'Tomate', categoria: 'opcional' },
      { tipo: 'Cebola Roxa', categoria: 'opcional' },
      { tipo: 'Pepino', categoria: 'opcional' },
    ],
  });

  await prisma.status.createMany({
    data: [
      { tipo: 'Solicitado' },
      { tipo: 'Em produção' },
      { tipo: 'Finalizado' },
    ],
  });
  console.log('Ingredientes inseridos!');
}

main().finally(() => prisma.$disconnect());