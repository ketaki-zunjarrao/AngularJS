package com.techlabs.creational.singletone.ex1;

public class Manager {
	private static Manager temp;

	private Manager() {
		System.out.println("Manager created");
	}

	public static Manager getManager() {
		if (temp == null)
			temp = new Manager();
		return temp;
	}

}
