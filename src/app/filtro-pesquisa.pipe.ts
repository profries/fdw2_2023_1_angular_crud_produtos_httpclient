import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valorPesquisado?: string): Produto[] {
    const nomePesquisado = valorPesquisado ?valorPesquisado :"";
    return listaProdutos.filter((produto) => 
      produto.nome?.toLowerCase().includes(nomePesquisado.toLowerCase()));
  }

}
