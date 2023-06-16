import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleGuard } from './guards/SampleGuard';
import { DetonadosComponent } from './private/detonados/detonados.component';
import { HomeComponent } from './private/home/home.component';
import { JogosComponent } from './private/jogos/jogos.component';
import { NoticiasComponent } from './private/noticias/noticias.component';
import { PerfilUsuarioComponent } from './private/perfil-usuario/perfil-usuario.component';
import { PrivateComponent } from './private/private.component';
import { ReviewsComponent } from './private/reviews/reviews.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    canActivate: [SampleGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'detonados', component: DetonadosComponent },
      { path: 'jogos', component: JogosComponent },
      { path: 'noticias', component: NoticiasComponent },
      { path: 'perfil-usuario', component: PerfilUsuarioComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
  {
    path: 'asdasd',
    component: PublicComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ],
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }