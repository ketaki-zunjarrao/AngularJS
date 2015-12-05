package com.techlabs.structural.iterator.ex1;

import java.util.ArrayList;
import java.util.Iterator;

public class PancakeHouseMenu {

	ArrayList menuItems;

	public PancakeHouseMenu() {
		menuItems = new ArrayList();

		addItem("K n B's pancake breakfast",
				"Pancake with fried egg and toast", false, 2.99);

		addItem("Regular pancake breakfast",
				"pancakr with fried egg and sausage", false, 2.99);

		addItem("Blueberry pancake", "pancake eith blueberry", true, 3.49);

		addItem("waffles", "waffles with choice blueberry or strawberry", true,
				3.59);
	}

	public ArrayList getMenuItems() {
		return menuItems;
	}

	private void addItem(String name, String description, boolean vegetarian,
			double price) {
		MenuItem menuItem = new MenuItem(name, description, vegetarian, price);
		menuItems.add(menuItem);

	}
	public Iterator createIterator() {
		return (Iterator) new PancakeHouseMenu();

	}


}
