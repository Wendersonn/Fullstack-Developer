package com.webservice.maxima.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Pedido {

    private long id;
    private BigDecimal total;
    private Integer quantidadeItens;
    private BigDecimal valorFrete;


    public Pedido(){

    }

    public Pedido(ResultSet rs) throws SQLException {
        setId(rs.getLong("ID"));
        setTotal(rs.getBigDecimal("VLR_TOTAL"));
        setQuantidadeItens(rs.getInt("QTD_ITENS"));
        setValorFrete(rs.getBigDecimal("VLR_FRETE"));
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public Integer getQuantidadeItens() {
        return quantidadeItens;
    }

    public void setQuantidadeItens(Integer quantidadeItens) {
        this.quantidadeItens = quantidadeItens;
    }

    public BigDecimal getValorFrete() {
        return valorFrete;
    }

    public void setValorFrete(BigDecimal valorFrete) {
        this.valorFrete = valorFrete;
    }
}
