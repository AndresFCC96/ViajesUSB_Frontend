import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoIdentificacionComponent } from './edit-tipo-identificacion.component';

describe('EditTipoIdentificacionComponent', () => {
  let component: EditTipoIdentificacionComponent;
  let fixture: ComponentFixture<EditTipoIdentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoIdentificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
