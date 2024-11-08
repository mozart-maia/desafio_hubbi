import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendasController } from './vendas/vendas.controller';
import { VendasService } from './vendas/vendas.service';
import { ProdutosService } from './produtos/produtos.service';
import { ProdutosController } from './produtos/produtos.controller';
import { ComprasController } from './compras/compras.controller';
import { ComprasService } from './compras/compras.service';

@Module({
  imports: [],
  controllers: [AppController, VendasController, ProdutosController, ComprasController],
  providers: [AppService, VendasService, ProdutosService, ComprasService],
})
export class AppModule {}
