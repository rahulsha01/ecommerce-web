import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonReactiveFormComponent } from './common-reactive-form.component';

describe('CommonReactiveFormComponent', () => {
  let component: CommonReactiveFormComponent;
  let fixture: ComponentFixture<CommonReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
