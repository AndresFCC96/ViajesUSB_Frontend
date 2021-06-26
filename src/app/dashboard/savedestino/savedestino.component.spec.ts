import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedestinoComponent } from './savedestino.component';

describe('SavedestinoComponent', () => {
  let component: SavedestinoComponent;
  let fixture: ComponentFixture<SavedestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
