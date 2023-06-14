import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleGuard } from './guards/SampleGuard';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private/private.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    canActivate: [SampleGuard],
    children: [
      { path: '', component: HomeComponent }
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
