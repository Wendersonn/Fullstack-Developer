package com.webservice.maxima.config;

import com.webservice.maxima.util.ResourceUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;

@Component
public class CreateTable {

    @Autowired
    private ResourceUtils resourceUtils;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostConstruct
    public void executarScript() throws IOException {

        String obj  = resourceUtils.lerArquivoResource("PEDIDO.sql");
        jdbcTemplate.execute(obj);
    }
}
