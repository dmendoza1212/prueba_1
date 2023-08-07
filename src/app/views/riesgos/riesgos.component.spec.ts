import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgosComponent } from './riesgos.component';

describe('RiesgosComponent', () => {
  let component: RiesgosComponent;
  let fixture: ComponentFixture<RiesgosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiesgosComponent]
    });
    fixture = TestBed.createComponent(RiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
