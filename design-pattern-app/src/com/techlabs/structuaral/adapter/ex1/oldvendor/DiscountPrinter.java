package com.techlabs.structuaral.adapter.ex1.oldvendor;

public class DiscountPrinter {

	public void printPdf(IDiscount obj) {
		System.out.println(obj.getDesciption());
		System.out.println(obj.calculateDiscount());
	}
}
