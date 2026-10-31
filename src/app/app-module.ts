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
import { ServiceCoche } from './services/service.coche';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { ServicePlantilla } from './services/service.plantillas';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ComicsComponent,
    PersonaApiComponent,
    MenuComponent,
    CochesApiComponent,
    PlantillaFuncionSimpleComponent,
    PlantillaFuncionMultipleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    ServicePersona,
    ServiceCoche,
    ServicePlantilla,
  ],
  bootstrap: [App],
})
export class AppModule { }
