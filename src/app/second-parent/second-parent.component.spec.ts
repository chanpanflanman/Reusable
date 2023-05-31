import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondParentComponent } from './second-parent.component';

describe('SecondParentComponent', () => {
  let component: SecondParentComponent;
  let fixture: ComponentFixture<SecondParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondParentComponent]
    });
    fixture = TestBed.createComponent(SecondParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
