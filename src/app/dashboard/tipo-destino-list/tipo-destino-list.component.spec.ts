import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDestinoListComponent } from './tipo-destino-list.component';

describe('TipoDestinoListComponent', () => {
  let component: TipoDestinoListComponent;
  let fixture: ComponentFixture<TipoDestinoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDestinoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDestinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
