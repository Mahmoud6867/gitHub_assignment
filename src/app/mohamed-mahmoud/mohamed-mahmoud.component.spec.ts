import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohamedMahmoudComponent } from './mohamed-mahmoud.component';

describe('MohamedMahmoudComponent', () => {
  let component: MohamedMahmoudComponent;
  let fixture: ComponentFixture<MohamedMahmoudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MohamedMahmoudComponent]
    });
    fixture = TestBed.createComponent(MohamedMahmoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
