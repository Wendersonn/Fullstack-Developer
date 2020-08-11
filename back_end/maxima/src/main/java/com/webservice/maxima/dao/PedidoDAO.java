package com.webservice.maxima.dao;

import com.webservice.maxima.model.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;

@Component
public class PedidoDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void insertPedido(Pedido pedido){
        jdbcTemplate.update("INSERT INTO PEDIDO(VLR_TOTAL, QTD_ITENS, VLR_FRETE) VALUES(?,?,?)",
                new Object[]{pedido.getTotal().floatValue(),
                        pedido.getQuantidadeItens(),pedido.getValorFrete().floatValue()});
    }

    public ArrayList<Pedido> obterPedidos(){
        return (ArrayList<Pedido>)jdbcTemplate.query("SELECT * FROM PEDIDO", ((rs, rowNum) -> new Pedido(rs)));
    }
}
