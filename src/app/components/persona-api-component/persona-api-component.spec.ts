import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaApiComponent } from './persona-api-component';

describe('PersonaApiComponent', () => {
  let component: PersonaApiComponent;
  let fixture: ComponentFixture<PersonaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
