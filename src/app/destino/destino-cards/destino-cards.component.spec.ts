import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoCardsComponent } from './destino-cards.component';

describe('DestinoCardsComponent', () => {
  let component: DestinoCardsComponent;
  let fixture: ComponentFixture<DestinoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinoCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
