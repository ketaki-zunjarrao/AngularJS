package com.techlabs.creational.simplefactory.ex1;

public class ShapeFactory {
	private static ShapeFactory temp;

	private ShapeFactory() {
	}

	public static ShapeFactory getInstance() {
		if (temp == null)
			return new ShapeFactory();
		return temp;
	}

	public IShape createShape(ShapeType type) {
		switch (type) {
		case CIRCLE:
			return new Circle();
		case TRIANGLE:
			return new Triangle();
		case RECTANGLE:
			return new Rectangle();
		case SQUARE:
			return new Square();

		default:
			return null;
		}

	}

}
