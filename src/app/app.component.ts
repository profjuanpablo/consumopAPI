
import { ProdutoService } from './service/produto.service';

import { Component } from '@angular/core';
import { IProduto } from './interface/IProduto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsumoAPI';
  constructor(private produtoService: ProdutoService){}

  obterTodosProdutos(){
    this.produtoService.obterTodos()
    .then(produtos => console.log(produtos) )
    .catch(error=>console.error());

  }

  obterPorId(){
    this.produtoService.obterPorId(3)
    .then(produtos => console.log(produtos) )
    .catch(error=>console.error());

  }

  adicionarProduto(){
    const produto: IProduto = {
      descricao: 'Pizza gigante de 60cm',
      preco: 45.00,
      categoria_id: 1

    };
    this.produtoService.adicionarProduto(produto)
    .then(produto => console.log('Produto Adicionado...'))
    .catch(error => console.error(error))

    }

    atualizarProduto(){
      const produto: IProduto = {
        id: 7,
        descricao: 'Pizza Maracanã',
        preco: 59.00,
        categoria_id: 1

      };
      this.produtoService.atualizarProduto(produto)
        .then(produto=> console.log('Atualizado', produto))
        .catch(error=>console.error(error))


    }

    deletarProduto(){
      this.produtoService.deletarProduto(8)
    .then(res => console.log('Removido',res) )
    .catch(error=>console.error());
    }

  }
