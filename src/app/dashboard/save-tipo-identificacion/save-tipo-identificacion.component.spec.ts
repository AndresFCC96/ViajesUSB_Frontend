import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTipoIdentificacionComponent } from './save-tipo-identificacion.component';

describe('SaveTipoIdentificacionComponent', () => {
  let component: SaveTipoIdentificacionComponent;
  let fixture: ComponentFixture<SaveTipoIdentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTipoIdentificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTipoIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
