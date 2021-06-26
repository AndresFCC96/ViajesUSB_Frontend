import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveclienteComponent } from './savecliente.component';

describe('SaveclienteComponent', () => {
  let component: SaveclienteComponent;
  let fixture: ComponentFixture<SaveclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
