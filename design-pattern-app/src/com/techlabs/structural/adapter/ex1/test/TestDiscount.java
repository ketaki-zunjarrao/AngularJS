package com.techlabs.structural.adapter.ex1.test;

import com.techlabs.structuaral.adapter.ex1.oldvendor.DiscountPrinter;
import com.techlabs.structuaral.adapter.ex1.oldvendor.Invoice;

public class TestDiscount {
	
	public static void main(String[] args) {
		DiscountPrinter printer=new DiscountPrinter();
		printer.printPdf(new Invoice("Book", 3000));
		printer.printPdf(new GoodAdapter("Mobile", 3, 500));
	}

}
