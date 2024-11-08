export interface Produto {
  nome: string;
  quantidade: number;
  idVenda: any;
}

export interface Venda {
  id: any;
  data: Date;
}

interface ProdutoCompra {
  idProduto: any;
  quantidade: number;
}

export interface Compra {
  id: any;
  produtos: ProdutoCompra[];
}
