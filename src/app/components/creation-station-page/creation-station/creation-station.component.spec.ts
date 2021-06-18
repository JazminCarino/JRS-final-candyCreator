import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationStationComponent } from './creation-station.component';

describe('CreationStationComponent', () => {
  let component: CreationStationComponent;
  let fixture: ComponentFixture<CreationStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
