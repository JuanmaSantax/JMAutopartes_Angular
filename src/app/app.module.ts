import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepuestosListComponent } from './repuestos-list/repuestos-list.component';
import { FormsModule } from '@angular/forms';
import { JMAutopartesAboutComponent } from './jmautopartes-about/jmautopartes-about.component';
import { JMAutopartesCartComponent } from './jmautopartes-cart/jmautopartes-cart.component';
import { JMAutopartesGeneralRepuestosComponent } from './jmautopartes-general-repuestos/jmautopartes-general-repuestos.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { JmautopartesFooterComponent } from './jmautopartes-footer/jmautopartes-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    RepuestosListComponent,
    JMAutopartesAboutComponent,
    JMAutopartesCartComponent,
    JMAutopartesGeneralRepuestosComponent,
    InputIntegerComponent,
    JmautopartesFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
