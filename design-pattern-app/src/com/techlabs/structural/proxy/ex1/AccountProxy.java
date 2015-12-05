package com.techlabs.structural.proxy.ex1;

import java.text.SimpleDateFormat;
import java.util.Date;

public class AccountProxy extends Account {

	public AccountProxy(int accountNumber, String name, double balance) {
		super(accountNumber, name, balance);
	}

	@Override
	public void deposit(double amount) {
		System.out.println("Before deposit Time "+getTime());
		super.deposit(amount);
		System.out.println("After deposit Time "+getTime());
	}

	@Override
	public void withdraw(double amount) {
		System.out.println("Before withdraw Time "+getTime());
		super.withdraw(amount);
		System.out.println("After deposit Time "+getTime());
	}

	public String getTime() {
		SimpleDateFormat dateFormat = new SimpleDateFormat(
				"dd-MM-YYYY hh:mm:ss");

		return dateFormat.format(new Date());

	}

}
