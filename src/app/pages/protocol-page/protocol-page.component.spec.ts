import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolPageComponent } from './protocol-page.component';

describe('ProtocolPageComponent', () => {
  let component: ProtocolPageComponent;
  let fixture: ComponentFixture<ProtocolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocolPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
