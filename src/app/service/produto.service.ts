
import { API_PATH } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interface/IProduto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){

    return this.httpClient.get<IProduto[]>(`${API_PATH}Produtos`).toPromise();
  }

  obterPorId(id: number){
    return this.httpClient.get<IProduto>(`${API_PATH}Produtos/${id}`).toPromise();

  }

  adicionarProduto(produto: IProduto){
    return this.httpClient.post<IProduto>(`${API_PATH}Produtos`,produto).toPromise();
  }

  atualizarProduto(produto: IProduto){
    return this.httpClient.put<IProduto>(`${API_PATH}Produtos/${produto.id}`,produto).toPromise();
  }

  deletarProduto(produtoid: number){
    return this.httpClient.delete(`${API_PATH}Produtos/${produtoid}`).toPromise();
  }

}
