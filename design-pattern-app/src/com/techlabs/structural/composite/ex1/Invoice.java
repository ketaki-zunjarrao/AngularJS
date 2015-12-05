package com.techlabs.structural.composite.ex1;

import java.util.ArrayList;
import java.util.List;

public class Invoice implements IOrderComponents {
	List<IOrderComponents> mylist;
	String description;

	public void add(IOrderComponents invoice) {
		mylist.add(invoice);

	}

	public Invoice(String description) {
		this.description = description;
		mylist = new ArrayList<IOrderComponents>();
	}

	@Override
	public void displayOrder() {
		System.out.println("Desplaying items in " + description);
		for (IOrderComponents components : mylist) {
			components.displayOrder();
		}
	}

}
