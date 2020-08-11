import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../shared/Pedido';
import { ServiceService } from 'src/app/config/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-cad-pedido',
  templateUrl: './cad-pedido.component.html',
  styleUrls: ['./cad-pedido.component.css']
})

export class CadPedidoComponent implements OnInit, OnChanges {

  model: Pedido;
  headers = [{ imagemUrl: '' }, { codigo: '' }, { nome: '' }, { qtde: '' }, { precoUnitario: 'Valor. Unit' }, { total: 'Valor Total' }, { del: '' }];
  private _toastRecebido = new Subject<string>();
  toastValor: string = '';
  constructor(private service: ServiceService, private servico: PedidoService, @Inject(HttpClient) private http: HttpClient) { }

  atualiarItensPreco(items): void {
    this.model.carrinho = items
    this.model.quantidadeItens = 0;
    this.model.somaItens = 0;
    this.model.carrinho.forEach(item => {
      this.model.somaItens += +item.total;
      this.model.quantidadeItens += +item.qtde;
    });
    this.service.get(environment.urlAPI +"obterfrete/"+ this.model.quantidadeItens).subscribe(item => this.model.valorFrete = item);
  }

  addProduto(codigo): void {
    this.model.codigoProduto = null;
    if (this.model.carrinho.find(item => item.codigo == codigo)) return this.swalError('Produto já cadastrado');

    this.model.produtos.forEach(item => {
      if (item.codigo == codigo) {
        item.total = item.precoUnitario;
        item.qtde = 1;
        this.model.carrinho.push(item);
        this.atualiarItensPreco(this.model.carrinho);
      }
    });
  }

  ngOnChanges() {
    console.log(this._toastRecebido)
    this._toastRecebido.subscribe((resposta) => this.toastValor = resposta);
    this._toastRecebido.pipe(debounceTime(8000)).subscribe(() => this.toastValor = '');
  }

  ngOnInit(): void {
    this.buscarParamentros();
    //Caso o endPoint de produtos não estiver funcionando descomentar essa linha para obter os produtos inseridos no codigo.
     this.produtosMock();
   
  }

  finalizarCompra(): void {
    this.model.total = this.model.somaItens + this.model.valorFrete
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(environment.urlAPI + 'salvarpedido', this.model, { headers, observe: 'response' }).subscribe(
      resposta => {
        if (resposta.status == 200) {
          this.swalSucesso('Pedido cadastrado com sucesso!')
          this.buscarParamentros();
        }
      }
    );
  };

  swalError(msg: string): void {
    Swal.fire({
      title: 'Opps!',
      text: msg,
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  }
  
  swalSucesso(msg: string): void {
    Swal.fire({
      title: 'Sucesso!',
      text: msg,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  }

  buscarParamentros() {
    this.model = new Pedido();
    this.service.get(`http://maximatech.free.beeceptor.com/cliente`).subscribe(_ => this.model.clientes = _);
    this.service.get(`http://maximatech.free.beeceptor.com/produto`).subscribe(_ => this.model.produtos = _);
  }

  produtosMock(){
    this.model.produtos = [
      {
        "id": "176c3694-f403-47d7-848c-7152ba4950d6",
        "codigo": "50",
        "nome": "b9d3b74e-c97c-4029-bff3-aa5d051010f5",
        "precoUnitario": 178
      },
      {
        "id": "176c3694-f403-47d7-848c-7152ba4950d6",
        "codigo": "12",
        "nome": "iPhone 11 Apple com 128GB, Tela Retina HD de 6,1”, iOS 13, Dupla Câmera Traseira de 12 MP, Resistente à Água e Bateria de Longa Duração - Branco",
        "precoUnitario": 4699,
        "imagemUrl": "https://images-submarino.b2w.io/produtos/01/00/img/1611324/8/1611324805_1SZ.jpg"
      },
      {
        "id": "176c3694-f403-47d7-848c-7152ba4950d6",
        "codigo": "35",
        "nome": "Monitor Widescreen LCD LED 18.5” AOC HD E970SWNL",
        "precoUnitario": 444.9
      },
      {
        "id": "a2f49077-99d2-4a16-89f1-83315d73468b",
        "codigo": "312800A",
        "nome": "Fogão 3 Bocas 1 Dupla Cristalaço Industrial Baixa Pressão",
        "precoUnitario": 718.08
      },
      {
        "id": "c363bddf-18a5-48e9-a874-5bd178e09198",
        "codigo": "478ZB",
        "nome": "Fone de Ouvido Apple AirPods 2 com Estojo de Recarga",
        "precoUnitario": 1099
      },
      {
        "id": "fc845cba-cf11-42bc-9506-acfa04c5c935",
        "codigo": "114523KL",
        "nome": "Galaxy S20 Ultra Cosmic Gray 128GB",
        "precoUnitario": 6029.1,
        "imagemUrl": "https://images-submarino.b2w.io/produtos/01/00/img/1521500/7/1521500721_1SZ.jpg"
      }
    ]
  }
}
