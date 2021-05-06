import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarformComponent } from './editarform.component';

describe('EditarformComponent', () => {
  let component: EditarformComponent;
  let fixture: ComponentFixture<EditarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
