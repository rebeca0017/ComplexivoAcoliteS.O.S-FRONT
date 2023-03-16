import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoPedidosComponent } from './mecanico-pedidos.component';

describe('MecanicoPedidosComponent', () => {
  let component: MecanicoPedidosComponent;
  let fixture: ComponentFixture<MecanicoPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecanicoPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
