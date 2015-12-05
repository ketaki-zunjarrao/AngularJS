package com.techlabs.creational.simplefactory.accountex;

public class CurrentAccount extends Account {

	@Override
	public void withdraw(double amount) {
		balance -= amount;
		System.out.println(amount + " is withdrawed from account no "
				+ getAccountNumber() + "\n Your balance is " + getBalance());
	}

}
