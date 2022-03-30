import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { LoginComponent } from './header/login/login.component';
import { SettingsComponent } from './header/settings/settings.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { FiltersComponent } from './filters/filters.component';
import { LogoComponent } from './header/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchInputComponent,
    LoginComponent,
    SettingsComponent,
    SearchItemComponent,
    FiltersComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
