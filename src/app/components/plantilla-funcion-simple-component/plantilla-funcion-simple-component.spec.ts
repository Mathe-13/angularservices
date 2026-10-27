import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantillaFuncionSimpleComponent } from './plantilla-funcion-simple-component';

describe('PlantillaFuncionSimpleComponent', () => {
  let component: PlantillaFuncionSimpleComponent;
  let fixture: ComponentFixture<PlantillaFuncionSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaFuncionSimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillaFuncionSimpleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
