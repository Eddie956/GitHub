import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitResultServiceComponent } from './git-result-service.component';

describe('GitResultServiceComponent', () => {
  let component: GitResultServiceComponent;
  let fixture: ComponentFixture<GitResultServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitResultServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitResultServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
