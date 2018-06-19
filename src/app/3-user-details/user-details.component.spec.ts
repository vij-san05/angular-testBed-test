/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

class RouterStub {
  navigate(param) {
  }
}

class ActivatedRouterStub {
  params: Observable<any> = Observable.empty();
}


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers:[
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect the user to te user page after saving', () => {
     let router = TestBed.get(Router);
     let spy = spyOn(router,'navigate');
     
     component.save();
     expect(spy).toHaveBeenCalledWith(['users']);
  });
});
