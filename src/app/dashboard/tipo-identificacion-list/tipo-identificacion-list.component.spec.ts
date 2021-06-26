import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoIdentificacionListComponent } from './tipo-identificacion-list.component';

describe('TipoIdentificacionListComponent', () => {
  let component: TipoIdentificacionListComponent;
  let fixture: ComponentFixture<TipoIdentificacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoIdentificacionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoIdentificacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
