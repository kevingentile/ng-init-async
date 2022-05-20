import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponent } from './async.component';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Commenting out this await will cause the 'should create' test to fail
    expect(await component.setupReadyHook).toBeTrue();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.body).toEqual("async component ready")
  });
});
