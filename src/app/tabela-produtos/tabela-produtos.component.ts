import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent {
  @Input() titulo = "Tabela de Produtos X";
  nomePesquisado?: string;
  listaProdutos: Produto[] = [];

  constructor(
      private produtoApiService: ProdutoApiService
  ) {
      this.listar();
  }
  
  listar() {
    this.produtoApiService.listar().subscribe(
      produtos => this.listaProdutos = produtos
    );
  }

  deletar(id?: string) {    
    this.produtoApiService.deletar(id!).subscribe(produto => {
      console.log('Produto deletado', produto);
      this.listar();
    });
  }

}
