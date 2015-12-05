package com.techlabs.creational.singletone.ex3;

import com.techlabs.creational.singletone.ex3.DirectionType;

;

public class TestDirectionType {
	public static void main(String[] args) {
		DirectionType type = DirectionType.EAST;
		// System.out.println("Opposite Direction of " + type + " is "
		// + type.getOpposite(type));
		iterat0r();

	}

	private static void iterat0r() {
		System.out.println("DIRECTION\tOPPOSITE-DIRECTION");
		for (DirectionType type : DirectionType.values()) {
			System.out.println(" " + type + "\t\t\t" + type.getOppositeType());
		}
	}
}
