import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequrestResetComponent } from './requrest-reset.component';

describe('RequrestResetComponent', () => {
  let component: RequrestResetComponent;
  let fixture: ComponentFixture<RequrestResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequrestResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequrestResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
