import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementStockPageComponent } from './etablissement-stock-page.component';

describe('EtablissementStockPageComponent', () => {
  let component: EtablissementStockPageComponent;
  let fixture: ComponentFixture<EtablissementStockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtablissementStockPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtablissementStockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
