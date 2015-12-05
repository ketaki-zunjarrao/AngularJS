package com.techlabs.creational.simplefactory.accountex;

public class SavingAccount extends Account {
	@Override
	public void withdraw(double amount) {
		if ((balance - amount) > 500) {
			balance = balance - amount;
			System.out.println(amount + " is withdrawed from account no "
					+ getAccountNumber() + "\n Your balance is " + balance);
		} else {
			System.out.println("Your account balance is low");
		}

	}

}
