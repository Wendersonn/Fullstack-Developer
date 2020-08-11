import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input('list') list: any;
  @Input('code') code: string = '';
  @Input('label') label: string = '';
  @Output('resultado') resultado = new EventEmitter<any>();

  valor: any;
  valorCombo(item) {
    this.resultado.emit(item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
