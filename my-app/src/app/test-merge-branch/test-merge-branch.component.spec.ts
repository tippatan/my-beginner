import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMergeBranchComponent } from './test-merge-branch.component';

describe('TestMergeBranchComponent', () => {
  let component: TestMergeBranchComponent;
  let fixture: ComponentFixture<TestMergeBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMergeBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMergeBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
