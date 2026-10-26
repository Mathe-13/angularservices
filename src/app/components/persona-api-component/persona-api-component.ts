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

  ngOnInit(): void {
    //Si devolvemos un Observable con la peticion, nos subcribimos a su promesa
    this._service.getPersona().subscribe((response) => {
      console.log("Leyendo personas")
      this.personas = response;
      this._cdr.detectChanges();
    })
  }
}
