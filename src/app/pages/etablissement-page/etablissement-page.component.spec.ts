import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementPageComponent } from './etablissement-page.component';

describe('EtablissementPageComponent', () => {
  let component: EtablissementPageComponent;
  let fixture: ComponentFixture<EtablissementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtablissementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtablissementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
