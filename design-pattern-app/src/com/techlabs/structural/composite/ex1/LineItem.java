package com.techlabs.structural.composite.ex1;

public class LineItem implements IOrderComponents {
	private int id, quantity;
	private String name;
	private double unitPrice;

	public LineItem(int id, String name, int quantity, double unitPrice) {
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
	}

	@Override
	public void displayOrder() {
		System.out.println("Item is: " + name);
		System.out.println("Item  ID is: " + id);
		System.out.println("Item quantity is: " + quantity);
		System.out.println("Item Price is: " + unitPrice);
	}

}
