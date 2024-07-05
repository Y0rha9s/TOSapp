import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngreRondaPage } from './ingre-ronda.page';

describe('IngreRondaPage', () => {
  let component: IngreRondaPage;
  let fixture: ComponentFixture<IngreRondaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngreRondaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
