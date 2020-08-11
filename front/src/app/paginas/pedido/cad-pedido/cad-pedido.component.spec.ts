import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPedidoComponent } from './cad-pedido.component';

describe('CadPedidoComponent', () => {
  let component: CadPedidoComponent;
  let fixture: ComponentFixture<CadPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
