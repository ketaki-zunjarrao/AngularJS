package com.techlabs.creational.singletone.ex2;

public enum AnimalType {
	// DOG, HUMAN, FROG;
	HUMAN(true), FROG(false), DOG(true);
	boolean mammal;

	private AnimalType(boolean mammal) {
		this.mammal = mammal;
	}

	public boolean isMammal() {
		/*
		 * if (this == AnimalType.DOG) return true; else if (this ==
		 * AnimalType.HUMAN) return true; return false;
		 */
		return mammal;
	}

}
