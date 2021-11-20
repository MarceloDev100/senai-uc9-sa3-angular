import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { FaleconoscoComponent } from './views/faleconosco/faleconosco.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { ProdutosComponent } from './views/produtos/produtos.component';

const routes: Routes = [
  { path: "" , component: HomeComponent },
  { path: "login" , component: LoginComponent },
  { path: "carrinho" , component: CarrinhoComponent },
  { path: "pedidos", component: PedidosComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "faleconosco", component: FaleconoscoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
