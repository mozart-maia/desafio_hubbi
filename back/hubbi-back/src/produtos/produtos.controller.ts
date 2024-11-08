import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  findAll(): string {
    const produtos = this.produtosService.encontrarTodos();
    const result = JSON.stringify(produtos);
    return `Isto retorna todos os produtos - ${result}`;
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `Isto retorna um produto com base no id ${params.id}`;
  }

  @Post()
  createOne(@Body() createProduto: any): string {
    this.produtosService.criar(createProduto);
    return `Novo produto criado - nome: ${createProduto.nome} quantidade: ${createProduto.quantidade} idVenda: ${createProduto.idVenda}`;
  }
}
