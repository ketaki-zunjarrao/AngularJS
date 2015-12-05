package com.techlabs.behavioral.observer.ex1.test;

import com.techlabs.behavioral.observer.ex1.Account;
import com.techlabs.behavioral.observer.ex1.IAccountListener;

public class MobileAppScreen implements IAccountListener {

	@Override
	public void balanceChanged(Account acc) {
		System.out.println("Application refreshing for " + acc.getName());
		System.out.println("Your balance is " + acc.getBalance());
	}

}
