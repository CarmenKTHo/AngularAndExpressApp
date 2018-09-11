import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterminimalComponent } from './footerminimal.component';

describe('FooterminimalComponent', () => {
  let component: FooterminimalComponent;
  let fixture: ComponentFixture<FooterminimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterminimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterminimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
