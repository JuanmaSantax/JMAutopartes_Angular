import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JMAutopartesGeneralRepuestosComponent } from './jmautopartes-general-repuestos/jmautopartes-general-repuestos.component';
import { JMAutopartesAboutComponent } from './jmautopartes-about/jmautopartes-about.component';
import { JMAutopartesCartComponent } from './jmautopartes-cart/jmautopartes-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repuestos',
    pathMatch: 'full'
  },
  {
    path: 'repuestos',
    component: JMAutopartesGeneralRepuestosComponent,
  },
  {
    path: 'about',
    component: JMAutopartesAboutComponent,
  },
  {
    path: 'carrito',
    component: JMAutopartesCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
