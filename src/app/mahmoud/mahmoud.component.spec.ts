import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahmoudComponent } from './mahmoud.component';

describe('MahmoudComponent', () => {
  let component: MahmoudComponent;
  let fixture: ComponentFixture<MahmoudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MahmoudComponent]
    });
    fixture = TestBed.createComponent(MahmoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
