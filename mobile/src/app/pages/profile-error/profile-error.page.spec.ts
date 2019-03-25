import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileErrorPage } from './profile-error.page';

describe('ProfileErrorPage', () => {
  let component: ProfileErrorPage;
  let fixture: ComponentFixture<ProfileErrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileErrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
