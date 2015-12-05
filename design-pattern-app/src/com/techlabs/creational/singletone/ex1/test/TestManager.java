package com.techlabs.creational.singletone.ex1.test;

import com.techlabs.creational.singletone.ex1.Manager;

public class TestManager {
	public static void main(String arg[]) {
		Manager boss1 = Manager.getManager();
		System.out.println(System.identityHashCode(boss1));
		Manager boss2 = Manager.getManager();
		System.out.println(System.identityHashCode(boss2));
	}

}
