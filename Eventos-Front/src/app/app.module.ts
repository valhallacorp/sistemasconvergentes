import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';
import { MzButtonModule, MzInputModule, MzNavbarModule,MzParallaxModule,MzIconModule,MzTabModule} from 'ngx-materialize';
import { importType } from '@angular/compiler/src/output/output_ast';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroEventosComponent } from './cadastro-eventos/cadastro-eventos.component';
import { EventoService } from './service/evento.service';

const ROUTES: Routes = [
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'app-cadastro-eventos', component: CadastroEventosComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    CadastroEventosComponent,
 
  ],
  imports: [
    BrowserModule,
    MzButtonModule,
    MzNavbarModule,
    MzTabModule,
    CommonModule,
    RouterModule.forRoot(ROUTES,
      { enableTracing: true }),
    FormsModule,
    MzInputModule,
    HttpClientModule,
  ],
  exports:[RouterModule],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
