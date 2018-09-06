import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdoclandingComponent } from './pdoclanding.component';

describe('PdoclandingComponent', () => {
  let component: PdoclandingComponent;
  let fixture: ComponentFixture<PdoclandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdoclandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdoclandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
