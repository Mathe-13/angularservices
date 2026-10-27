import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersona } from '../../services/service.persona';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-persona-api-component',
  standalone: false,
  styleUrl: './persona-api-component.css',
  templateUrl: './persona-api-component.html',
})
export class PersonaApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePersona
  ) { }

  async ngOnInit(): Promise<void> {
    //   this.personas = await this._service.getPersonasAsync();
    //   this._cdr.detectChanges();
    // } catch(error: any) {
    //   console.error("Error en el Api", error);


    //Si devolvemos un Observable con la peticion, nos subcribimos a su promesa
    //OBSERVABLE (abajo)
    this._service.getPersonas().subscribe({
      next: (response) => {
        this.personas = response;
        this._cdr.detectChanges();
      }, error: (error) => {
        console.error("Error en el Api", error);
      }
    })
  }
}
