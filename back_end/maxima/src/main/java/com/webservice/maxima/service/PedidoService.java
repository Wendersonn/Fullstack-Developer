package com.webservice.maxima.service;

import com.webservice.maxima.dao.PedidoDAO;
import com.webservice.maxima.model.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoDAO pedidoDAO;

    public void insertPedido(Pedido pedido){
        pedidoDAO.insertPedido(pedido);
    }

    public ArrayList<Pedido> obterPedidos(){
        return pedidoDAO.obterPedidos();
    }

}
