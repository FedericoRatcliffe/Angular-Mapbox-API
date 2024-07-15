import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomRangePageComponent } from './zoom-range-page.component';

describe('ZoomRangePageComponent', () => {
  let component: ZoomRangePageComponent;
  let fixture: ComponentFixture<ZoomRangePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomRangePageComponent]
    });
    fixture = TestBed.createComponent(ZoomRangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
