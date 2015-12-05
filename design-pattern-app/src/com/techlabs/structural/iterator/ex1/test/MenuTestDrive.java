package com.techlabs.structural.iterator.ex1.test;

import com.techlabs.structural.iterator.ex1.DinnerMenu;
import com.techlabs.structural.iterator.ex1.PancakeHouseMenu;
import com.techlabs.structural.iterator.ex1.Waitress;

public class MenuTestDrive {
	public static void main(String[] args) {
		PancakeHouseMenu pancakeHouseMenu = new PancakeHouseMenu();
		DinnerMenu dinnerMenu = new DinnerMenu();

		Waitress waitress = new Waitress(pancakeHouseMenu, dinnerMenu);
		waitress.printMenu();
	}

}
