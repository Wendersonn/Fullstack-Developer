package com.webservice.maxima.service;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class FreteService {

    public Double valorFrete(Integer qtdItens) {
        Random random = new Random();
        int frete = random.nextInt((10 - 5) + 1) + 5;
        double result = qtdItens * frete;
        return result;
    }
}
