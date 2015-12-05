package com.techlabs.behavioral.template.ex1.test;

import com.techlabs.behavioral.template.ex1.BruCoffee;
import com.techlabs.behavioral.template.ex1.CoffeeTemplate;

public class TestCoffee {
	public static void main(String[] args) {
		CoffeeTemplate coffee;
		coffee = new BruCoffee();
		coffee.prepareCoffee();
	}

}
