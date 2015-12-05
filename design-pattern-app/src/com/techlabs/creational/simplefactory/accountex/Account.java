package com.techlabs.creational.simplefactory.accountex;

public abstract class Account {
	private int accountNumber;
	private String name;
	protected double balance;

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public void deposit(double amount) {
		balance += amount;
		System.out.println(balance + "Rs are deposited to account no"
				+ accountNumber + "\n Now, your balance is " + balance);
	}

	public abstract void withdraw(double amount);

	public int getAccountNumber() {
		return accountNumber;
	}

	public String getName() {
		return name;
	}

	public double getBalance() {
		return balance;
	}

}
