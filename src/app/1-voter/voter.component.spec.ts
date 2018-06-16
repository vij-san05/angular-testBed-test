import { VoterComponent } from './voter.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]     
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    
  });

  it('it should renter total votes', () => {
    component.othersVote=20;
    component.myVote=1;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el : HTMLElement = de.nativeElement;
    expect(el.innerText).toBe('21');
  });

  it('should highlight the upvote buttom if I have upvoted ', () => {
    component.myVote= 1;
    fixture.detectChanges();
    let le= fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(le.classes['highlighted']).toBeTruthy();
  });
});
