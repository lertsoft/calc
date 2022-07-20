import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUpdateComponent } from './service-update.component';

describe('ServiceUpdateComponent', () => {
  let component: ServiceUpdateComponent;
  let fixture: ComponentFixture<ServiceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
