import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from 'src/app/core/modules/core.module';


import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    StoreModule.forRoot(appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
