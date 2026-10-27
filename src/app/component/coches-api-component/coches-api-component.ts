import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoche } from '../../services/service.coche';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {
  public arrayCoches!: Array<Coche>;


  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceCoche
  ) { }

  async ngOnInit(): Promise<void> {
    this.arrayCoches = await this._service.getCochesAsync();
    console.log(this.arrayCoches)
    this._cdr.detectChanges();

  }
}
