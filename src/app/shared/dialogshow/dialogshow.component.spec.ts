import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogshowComponent } from './dialogshow.component';

describe('DialogshowComponent', () => {
  let component: DialogshowComponent;
  let fixture: ComponentFixture<DialogshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
