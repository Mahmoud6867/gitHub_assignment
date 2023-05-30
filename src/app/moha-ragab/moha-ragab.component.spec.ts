import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohaRagabComponent } from './moha-ragab.component';

describe('MohaRagabComponent', () => {
  let component: MohaRagabComponent;
  let fixture: ComponentFixture<MohaRagabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MohaRagabComponent]
    });
    fixture = TestBed.createComponent(MohaRagabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
