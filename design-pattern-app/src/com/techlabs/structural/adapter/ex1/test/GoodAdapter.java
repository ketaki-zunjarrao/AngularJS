package com.techlabs.structural.adapter.ex1.test;

import com.techlabs.structuaral.adapter.ex1.oldvendor.IDiscount;
import com.techlabs.structural.adapter.ex1.newvendor.Good;

public class GoodAdapter implements IDiscount {

	Good good;

	public GoodAdapter(String name, int quantity, double price) {
		good = new Good(name, quantity, price);
	}

	@Override
	public String getDesciption() {
		return good.getName();
	}

	@Override
	public double calculateDiscount() {
		return good.calculateToatalPrice();
	}

}
