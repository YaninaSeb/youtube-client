import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/header/login/login.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SearchComponent,
    LoginComponent,
    LogoComponent,
    SearchFormComponent,
    SettingsButtonComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
