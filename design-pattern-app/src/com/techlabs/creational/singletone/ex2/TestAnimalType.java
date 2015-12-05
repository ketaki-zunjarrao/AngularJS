package com.techlabs.creational.singletone.ex2;

public class TestAnimalType {
	public static void main(String[] args) {
		AnimalType animal1 = AnimalType.DOG;

		System.out.println(System.identityHashCode(animal1));
		System.out.println(animal1.isMammal());

		AnimalType animal2 = AnimalType.FROG;
		System.out.println(System.identityHashCode(animal2));
		System.out.println(animal2.isMammal());

		AnimalType animal3 = AnimalType.DOG;
		System.out.println(System.identityHashCode(animal3));

		iterateAcross();

	}

	private static void iterateAcross() {

		for (AnimalType type : AnimalType.values()) {
			System.out.print(type + " ");
			System.out.println(type.mammal);
		}
	}
}
