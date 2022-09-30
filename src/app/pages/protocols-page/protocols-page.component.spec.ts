import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolsPageComponent } from './protocols-page.component';

describe('ProtocolsPageComponent', () => {
  let component: ProtocolsPageComponent;
  let fixture: ComponentFixture<ProtocolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocolsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
