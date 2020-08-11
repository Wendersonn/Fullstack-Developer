package com.webservice.maxima.api;

import com.webservice.maxima.model.Pedido;
import com.webservice.maxima.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RequestMapping("/api")
@RestController
public class Pedidos {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping("/salvarpedido")
    public void salvarPedido(@RequestBody Pedido pedido) {
        pedidoService.insertPedido(pedido);
    }

    @GetMapping("/obterpedidos")
    public ArrayList<Pedido> obterPedidos() {
        return pedidoService.obterPedidos();
    }
}
