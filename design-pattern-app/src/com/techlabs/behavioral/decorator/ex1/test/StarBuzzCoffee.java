package com.techlabs.behavioral.decorator.ex1.test;

import com.techlabs.behavioral.decorator.ex1.Beverage;
import com.techlabs.behavioral.decorator.ex1.Espresso;
import com.techlabs.behavioral.decorator.ex1.HouseBlend;
import com.techlabs.behavioral.decorator.ex1.Mocha;
import com.techlabs.behavioral.decorator.ex1.Soy;

public class StarBuzzCoffee {
	public static void main(String[] args) {
		Beverage beverage = new Espresso();
		System.out.println(beverage.getDescription() + " $ " + beverage.cost());

		Beverage beverage2 = new HouseBlend();
		beverage2 = new Mocha(beverage2);
		beverage2 = new Soy(beverage2);
		System.out.println(beverage2.getDescription() + " $ "
				+ beverage2.cost());

	}
}
