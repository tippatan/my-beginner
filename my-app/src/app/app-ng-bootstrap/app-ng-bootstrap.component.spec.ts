import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgBootstrapComponent } from './app-ng-bootstrap.component';

describe('AppNgBootstrapComponent', () => {
  let component: AppNgBootstrapComponent;
  let fixture: ComponentFixture<AppNgBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNgBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
