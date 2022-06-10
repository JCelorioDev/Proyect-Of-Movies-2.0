import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarXAutorComponent } from './buscar-xautor.component';

describe('BuscarXAutorComponent', () => {
  let component: BuscarXAutorComponent;
  let fixture: ComponentFixture<BuscarXAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarXAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarXAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
