import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoDestinoComponent } from './edit-tipo-destino.component';

describe('EditTipoDestinoComponent', () => {
  let component: EditTipoDestinoComponent;
  let fixture: ComponentFixture<EditTipoDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
