package com.techlabs.behavioral.decorator.ex1;

public class Mocha extends CodimentDecorator {
	Beverage beverage;

	public Mocha(Beverage beverage) {
		this.beverage = beverage;
	}

	@Override
	public String getDescription() {
		return beverage.getDescription();
	}

	@Override
	public double cost() {
		return 0.20 + beverage.cost();
	}

}
