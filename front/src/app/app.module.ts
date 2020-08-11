import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPedidoComponent } from './paginas/pedido/list-pedido/list-pedido.component';
import { CadPedidoComponent } from './paginas/pedido/cad-pedido/cad-pedido.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { AccordionModule } from 'primeng/accordion';
import { MegaMenuModule } from 'primeng/megamenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SelectComponent } from './componentes/select/select.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ServiceService } from './config/service.service';
import { DataTableComponent } from './componentes/data-table/data-table.component';
import { MoedaPipe } from './pipe/moeda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListPedidoComponent,
    CadPedidoComponent,
    MenuComponent,
    SelectComponent,
    DataTableComponent,
    MoedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    NgSelectModule,
    FormsModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
