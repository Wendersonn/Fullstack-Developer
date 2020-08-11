import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from 'src/app/config/service.service';

@Component({
  selector: 'app-list-pedido',
  templateUrl: './list-pedido.component.html',
  styleUrls: ['./list-pedido.component.css']
})
export class ListPedidoComponent implements OnInit {

  rows: any = [];
  headers = [{ id: '#' }, { total: 'Valor Total' }, { quantidadeItens: 'Quant. de Itens' }, { valorFrete: 'Valor Frete' }];
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
      this.service.get("http://localhost:8080/api/obterpedidos").subscribe(resultado =>{
          this.rows = resultado;
      })

  }

}
