import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent implements OnInit {
  @ViewChild("selectfuncion") selectFuncion!: ElementRef;
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
    let funcion = this.selectFuncion.nativeElement.value;
    this.personas = await this._service.getPlantillaByFuncionAsync(funcion);
    this._cdr.detectChanges();
  }
}