import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreservicesandinfoComponent } from './moreservicesandinfo.component';

describe('MoreservicesandinfoComponent', () => {
  let component: MoreservicesandinfoComponent;
  let fixture: ComponentFixture<MoreservicesandinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreservicesandinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreservicesandinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
