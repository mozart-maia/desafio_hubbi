import { Injectable } from '@nestjs/common';
import { Venda } from 'src/interfaces/interface';
@Injectable()
export class VendasService {
  private readonly vendas: Venda[] = [];

  criar(venda: Venda) {
    this.vendas.push(venda);
  }

  encontrarTodos(): Venda[] {
    return this.vendas;
  }
}
