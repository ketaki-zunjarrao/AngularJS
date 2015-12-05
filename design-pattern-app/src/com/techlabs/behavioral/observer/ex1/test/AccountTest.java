package com.techlabs.behavioral.observer.ex1.test;

import com.techlabs.behavioral.observer.ex1.Account;

public class AccountTest {
	public static void main(String[] args) {
		Account acc1 = new Account("Ketaki", 9000);
		
		acc1.addAccListener(new MobileAppScreen());
		acc1.addAccListener(new ATMScreen());
		acc1.deposite(900);
		acc1.withdraw(900);

	}

}
