import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() rows: any = [];
  @Input() headers: any = [];
  @Output() returnRow = new EventEmitter();

  cabecalho: any;
  referencia: any;
  constructor() { }

  ngOnInit(): void {
    this.cabecalho = [];
    this.referencia = [];
    this.headers.forEach(item => {
      const nameChave = Object.keys(item)[0];
      this.cabecalho.push(item[nameChave].toString());
      this.referencia.push(nameChave);

    });
  }

  calcularTotal(row) {
    this.rows.forEach(item => { if (item.codigo == row.codigo) item.total = +row.qtde * +row.precoUnitario });
    this.returnRow.emit(this.rows);
  }

  deletarRow(item) {
    this.rows = this.rows.filter(it => it.codigo !== item.codigo);
    this.returnRow.emit(this.rows);
  }

}
