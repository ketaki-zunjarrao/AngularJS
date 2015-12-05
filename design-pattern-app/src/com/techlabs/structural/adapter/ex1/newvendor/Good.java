package com.techlabs.structural.adapter.ex1.newvendor;

public class Good {

	private String name;
	private int quantity;
	private double price;

	public Good(String name, int quantity, double price) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	public String getName() {
		return name;
	}

	public int getQuantity() {
		return quantity;
	}

	public double getPrice() {
		return price;
	}

	public double calculateToatalPrice() {
		return quantity * price;
	}

	public double getDiscount() {
		return (calculateToatalPrice() * (40 / 100));

	}

}
