import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { CreateVendaDto } from './create-venda.dto';

@Controller('vendas')
export class VendasController {
  constructor(private vendasService: VendasService) {}

  @Get()
  findAll(): string {
    const vendas = this.vendasService.encontrarTodos();
    const result = JSON.stringify(vendas);
    return `Isto retorna todas as vendas: ${result}`;
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `Isto retorna apenas a venda ${params.id} com base no id`;
  }

  @Post()
  createOne(@Body() createVenda: CreateVendaDto): string {
    this.vendasService.criar(createVenda);

    return `Nova venda criada - id: ${createVenda.id} data: ${createVenda.data}`;
  }
}
