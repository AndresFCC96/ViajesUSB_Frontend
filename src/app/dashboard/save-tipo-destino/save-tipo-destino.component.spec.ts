import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTipoDestinoComponent } from './save-tipo-destino.component';

describe('SaveTipoDestinoComponent', () => {
  let component: SaveTipoDestinoComponent;
  let fixture: ComponentFixture<SaveTipoDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTipoDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTipoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
