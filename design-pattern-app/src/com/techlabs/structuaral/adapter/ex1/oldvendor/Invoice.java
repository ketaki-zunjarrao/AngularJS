package com.techlabs.structuaral.adapter.ex1.oldvendor;

public class Invoice implements IDiscount {
	private String productName;
	private double billAmount;

	public Invoice(String productName, double billAmount) {
		this.billAmount = billAmount;
		this.productName = productName;
	}

	@Override
	public String getDesciption() {
		return productName;
	}

	@Override
	public double calculateDiscount() {
		return billAmount * 20/100;
	}

}
