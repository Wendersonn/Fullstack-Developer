package com.webservice.maxima.api;

import com.webservice.maxima.service.FreteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class CalcularFrete {

    @Autowired
    private FreteService freteService;

    @GetMapping("/obterfrete/{quantidade}")
    public Double obterValorFrete(@PathVariable("quantidade") Integer quantidade){
        return freteService.valorFrete(quantidade);
    }
}
