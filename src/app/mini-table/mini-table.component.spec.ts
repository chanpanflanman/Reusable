import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTableComponent } from './mini-table.component';

describe('MiniTableComponent', () => {
  let component: MiniTableComponent;
  let fixture: ComponentFixture<MiniTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniTableComponent]
    });
    fixture = TestBed.createComponent(MiniTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
