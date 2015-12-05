package com.techlabs.behavioral.template.ex1;

public class NessCoffee extends CoffeeTemplate {

	@Override
	protected void addCoffeePowder() {
		System.out.println("Adding  ness coffee");
	}

	@Override
	protected void addSugar() {
		System.out.println("Adding 200gm of sugar");
	}

	@Override
	protected void addMilk() {
		System.out.println("Adding milk");
	}

	@Override
	protected void boilWater() {
		System.out.println("Adding 200ml of water");
	}

}
