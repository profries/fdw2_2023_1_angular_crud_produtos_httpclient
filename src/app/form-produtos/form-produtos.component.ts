import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit{
  @Input() titulo = "Formulário de Produtos";
  produto = new Produto();
  id!: number;
  botaoAcao?: string;
  constructor(
    private produtoService: ProdutoService,
    private produtoApiService: ProdutoApiService,
    private router: Router,
    private route: ActivatedRoute) {    
  }

  ngOnInit(): void {
    this.botaoAcao = "Cadastrar";
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.botaoAcao = "Editar";
      this.produtoApiService.buscarPorId(this.id).subscribe(produto => {
        this.produto = produto;
        console.log(this.produto);  
      });
    }
  }

  salvar() {
    if(!this.id) {
      this.produtoApiService.inserir(this.produto).subscribe(produtoI => {
        console.log('Produto Cadastrado', produtoI);
        this.produto = new Produto();
        alert("Cadastro realizado com sucesso!")  
      });
    }
    else {
      this.produtoService.editar(this.id, this.produto);      
      alert("Edicao realizado com sucesso!")
    }
  }
  cancelar() {
    //ir para a rota /tabela
    this.router.navigate(['/tabela']);
  }
}

