import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantilla-funcion-multiple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple-component.css',
  templateUrl: './plantilla-funcion-multiple-component.html',
})
export class PlantillaFuncionMultipleComponent implements OnInit {
  @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public personas!: Array<Plantilla>;
  public funciones!: Array<string>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePlantilla
  ) { }

  ngOnInit(): void {
    this._service.getFuncionesPlantilla().subscribe((response) => {
      this.funciones = response;
      this._cdr.detectChanges();
    })
  }

  async mostrarPlantilla(): Promise<void> {
    let aux = [];
    //el control html select tiene una propiedad options
    for (let opcion of this.selectFunciones.nativeElement.options) {
      if (opcion.selected == true) {
        aux.push(opcion.value);
      }
    }
    this.personas = await this._service.getPlantillaFunciones(aux);
    this._cdr.detectChanges();
  }
}