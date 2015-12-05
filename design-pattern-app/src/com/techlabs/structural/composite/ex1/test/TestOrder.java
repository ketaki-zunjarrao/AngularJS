package com.techlabs.structural.composite.ex1.test;

import com.techlabs.structural.composite.ex1.IOrderComponents;
import com.techlabs.structural.composite.ex1.Invoice;
import com.techlabs.structural.composite.ex1.LineItem;

public class TestOrder {
	public static void main(String[] args) {
		Invoice main;
		main = new Invoice("Main Invoice");

		Invoice book = new Invoice("Book");
		book.add(new LineItem(101, "C++", 1, 450));
		book.add(new LineItem(102, "JAVA", 2, 679));

		Invoice mobile = new Invoice("Mobiles");
		mobile.add(new LineItem(201, "Nokia301", 3, 50000));
		mobile.add(new LineItem(202, "Nokia Lumia", 4, 9090));

		Invoice smartPhones = new Invoice("SmartPhones");
		smartPhones.add(new LineItem(301, "Samsung galaxy", 3, 9080));
		smartPhones.add(new LineItem(302, "Micromax Canvas", 4, 8080));

		mobile.add(smartPhones);

		main.add(book);
		main.add(mobile);
		main.displayOrder();

	}

}
