import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailslistComponent } from './userdetailslist.component';

describe('UserdetailslistComponent', () => {
  let component: UserdetailslistComponent;
  let fixture: ComponentFixture<UserdetailslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
