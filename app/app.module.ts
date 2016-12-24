import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';
import { LoginComponent }  from './login/login.component';
import { routing }  from './app.routing';

import { LoginService } from './services/login.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  LoginComponent ],
  providers:    [ LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
