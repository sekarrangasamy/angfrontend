import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperienceComponent } from './workexperience.component';

describe('WorkexperienceComponent', () => {
  let component: WorkexperienceComponent;
  let fixture: ComponentFixture<WorkexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
