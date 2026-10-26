import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersona } from './services/service.persona';
import { PersonaApiComponent } from './components/persona-api-component/persona-api-component';
import { MenuComponent } from './components/menu-component/menu-component';

@NgModule({
  declarations: [App, ComicsComponent, PersonaApiComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    ServicePersona,
  ],
  bootstrap: [App],
})
export class AppModule {}
