package com.techlabs.creational.simplefactory.ex1.test;

import com.techlabs.creational.simplefactory.ex1.IShape;
import com.techlabs.creational.simplefactory.ex1.ShapeFactory;
import com.techlabs.creational.simplefactory.ex1.ShapeType;

public class TestShape {
	public static void main(String[] args) {
		IShape shape = ShapeFactory.getInstance().createShape(
				ShapeType.RECTANGLE);
		shape.draw();

		System.out.println(shape.getClass());
	}

}
