import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SolicitacaoAcessoComponent} from './solicitacao-acesso/solicitacao-acesso.component';
import {MeuCadastroComponent} from "./meu-cadastro/meu-cadastro.component";
import {LoginComponent} from "./login/login.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {GerenciarUsuariosComponent} from "./gerenciar-usuarios/gerenciar-usuarios.component";
import {EditarUsuarioComponent} from "./editar-usuario/editar-usuario.component";
import {ComunicacaoInternaComponent} from "./comunicacao-interna/comunicacao-interna.component";
import {ParametrosComponent} from "./parametros/parametros.component";
import {NovaComunicacaoInternaComponent} from "./nova-comunicacao-interna/nova-comunicacao-interna.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: '',
    component: NavBarComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'solicitacao-acesso', component: SolicitacaoAcessoComponent},
      {path: 'meu-cadastro', component: MeuCadastroComponent},
      {path: 'gerenciar-usuarios', component: GerenciarUsuariosComponent},
      {path: 'editar-usuario/:id', component: EditarUsuarioComponent},
      {path: 'comunicacao-interna', component: ComunicacaoInternaComponent},
      {path: 'nova-comunicacao-interna', component: NovaComunicacaoInternaComponent},
      {path: 'parametros', component: ParametrosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true} // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
