import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalRegistrationComponent } from './personnal-registration.component';

describe('PersonnalRegistrationComponent', () => {
  let component: PersonnalRegistrationComponent;
  let fixture: ComponentFixture<PersonnalRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
