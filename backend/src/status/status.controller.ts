import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status') // Define que a rota será http://localhost:3000/status
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get() // Define o método HTTP GET
  findAll() {
    return this.statusService.findAll();
  }
}