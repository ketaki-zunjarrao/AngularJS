package com.techlabs.structural.iterator.ex1;

import java.util.Iterator;

public class DinnerMenu {
	static final int MAX_ITEMS = 6;
	int numberOfItems = 0;
	MenuItem[] menuItems;

	public DinnerMenu() {

		addItem("vegetarian BLT", "bacon with lettuce n tomato on wheat", true,
				2.99);

		addItem("BLT", "bacon with lettuce n tomato on wheat", false, 2.99);

		addItem("soup of day", "soup with side of potato salad", false, 3.19);
	}

	private void addItem(String name, String description, boolean vegetarian,
			double price) {
		MenuItem menuItem = new MenuItem(name, description, vegetarian, price);
		if (numberOfItems >= MAX_ITEMS) {
			System.err.println("menu is full cant add more item");
		} else {
			menuItems[numberOfItems] = menuItem;
			numberOfItems++;
		}
	}

	public MenuItem[] getMenuItems() {
		return menuItems;
	}

	public Iterator createIterator() {
		return new DinnerMenuIterator(menuItems);

	}
	

}
