package com.techlabs.behavioral.template.ex1;

public abstract class CoffeeTemplate {

	public final void prepareCoffee() {
		
		boilWater();
		addMilk();
		addSugar();
		addCoffeePowder();
		System.out.println("Coffee is ready");
	}

	protected abstract void addCoffeePowder();

	protected abstract void addSugar();

	protected abstract void addMilk();

	protected abstract void boilWater();
}
