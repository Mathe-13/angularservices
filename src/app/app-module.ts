import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';

@NgModule({
  declarations: [App, ComicsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceComics],
  bootstrap: [App],
})
export class AppModule { }
