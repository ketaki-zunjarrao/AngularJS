package com.techlabs.behavioral.template.ex1;

public class BruCoffee extends CoffeeTemplate {

	@Override
	protected void addCoffeePowder() {
		System.out.println("Adding Bru Coffee ");
	}

	@Override
	protected void addSugar() {
		System.out.println("Adding 1gm of Sugar");
	}

	@Override
	protected void addMilk() {
		System.out.println("Adding milk");
	}

	@Override
	protected void boilWater() {
		System.out.println("Adding 1 Litre of Water ");
	}

}
