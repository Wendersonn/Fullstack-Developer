import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MegaMenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pedido',
        items: [
          [{
            items: [{ label: 'Cadastro' , routerLink: 'cadastrar-pedido'}, { label: 'Listagem', routerLink: 'listar-pedido' }]
          }]
        ]
      }
    ];
  }

}
