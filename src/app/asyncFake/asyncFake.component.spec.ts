import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';

import { AsyncFakeComponent } from './asyncFake.component';

describe('AsyncFakeComponent', () => {
  let component: AsyncFakeComponent;
  let fixture: ComponentFixture<AsyncFakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncFakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    flush()
    expect(component).toBeTruthy();
    expect(component.body).toEqual("asyncFake component ready")
  }));
});
