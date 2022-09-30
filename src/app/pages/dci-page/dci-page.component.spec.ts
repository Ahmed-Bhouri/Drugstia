import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DciPageComponent } from './dci-page.component';

describe('DciPageComponent', () => {
  let component: DciPageComponent;
  let fixture: ComponentFixture<DciPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DciPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DciPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
