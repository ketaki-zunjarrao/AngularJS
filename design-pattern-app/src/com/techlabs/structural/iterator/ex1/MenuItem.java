package com.techlabs.structural.iterator.ex1;
public class MenuItem {

	String name;
	String description;
	boolean vegetarian;
	double price;

	public MenuItem(String name, String description, boolean vegetarian,
			double price) {
		this.description = description;
		this.name = name;
		this.price = price;
		this.vegetarian = vegetarian;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public boolean isVegetarian() {
		return vegetarian;
	}

	public double getPrice() {
		return price;
	}

}
