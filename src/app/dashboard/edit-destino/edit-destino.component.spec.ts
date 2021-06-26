import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDestinoComponent } from './edit-destino.component';

describe('EditDestinoComponent', () => {
  let component: EditDestinoComponent;
  let fixture: ComponentFixture<EditDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
