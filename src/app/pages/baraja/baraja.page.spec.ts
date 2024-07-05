import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarajaPage } from './baraja.page';

describe('BarajaPage', () => {
  let component: BarajaPage;
  let fixture: ComponentFixture<BarajaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarajaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
