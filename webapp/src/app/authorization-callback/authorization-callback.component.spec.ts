import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationCallbackComponent } from './authorization-callback.component';

describe('AuthorizationCallbackComponent', () => {
  let component: AuthorizationCallbackComponent;
  let fixture: ComponentFixture<AuthorizationCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
