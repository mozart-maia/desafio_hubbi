import { Injectable } from '@nestjs/common';
import { Produto } from 'src/interfaces/interface';

@Injectable()
export class ProdutosService {
  private readonly produtos: Produto[] = [];

  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  encontrarTodos(): Produto[] {
    return this.produtos;
  }
}
