import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdParentComponent } from './third-parent.component';

describe('ThirdParentComponent', () => {
  let component: ThirdParentComponent;
  let fixture: ComponentFixture<ThirdParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdParentComponent]
    });
    fixture = TestBed.createComponent(ThirdParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
