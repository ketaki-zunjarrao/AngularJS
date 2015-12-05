package com.techlabs.structural.iterator.ex1;

import java.util.Iterator;

public class Waitress {

	PancakeHouseMenu pancakeHouseMenu;
	DinnerMenu dinnerMenu;

	public Waitress(PancakeHouseMenu pancakeHouseMenu, DinnerMenu dinnerMenu) {
		this.dinnerMenu = dinnerMenu;
		this.pancakeHouseMenu = pancakeHouseMenu;
	}

	public void printMenu() {
		Iterator pancakeIterator = pancakeHouseMenu.createIterator();
		Iterator dinnerIterator = dinnerMenu.createIterator();

		System.out.println("MENU\n------\nBreakFast");
		printMenu(pancakeIterator);
		System.out.println("Lunch");
		printMenu(dinnerIterator);

	}

	private void printMenu(Iterator iterator) {
		MenuItem menuItem = (MenuItem) iterator.next();
		System.out.println(menuItem.getName() + ", "
				+ menuItem.getDescription() + ", " + menuItem.getPrice());
	}

}
