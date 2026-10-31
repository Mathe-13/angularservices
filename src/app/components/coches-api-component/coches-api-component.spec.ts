import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CochesApiComponent } from './coches-api-component';

describe('CochesApiComponent', () => {
  let component: CochesApiComponent;
  let fixture: ComponentFixture<CochesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CochesApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CochesApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
