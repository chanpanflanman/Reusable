import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstParentComponent } from './first-parent.component';

describe('FirstParentComponent', () => {
  let component: FirstParentComponent;
  let fixture: ComponentFixture<FirstParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstParentComponent]
    });
    fixture = TestBed.createComponent(FirstParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
