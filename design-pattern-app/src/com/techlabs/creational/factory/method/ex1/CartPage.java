package com.techlabs.creational.factory.method.ex1;

public class CartPage extends Page {

	public CartPage(String details) {
		super(details);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void load() {
		System.out.println(this.details+"page is loading");	}

}
