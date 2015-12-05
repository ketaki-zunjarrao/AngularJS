package com.techlabs.structural.proxy.ex1;

public class Account {
	private int accountNumber;
	private String name;
	protected double balance;

	public Account(int accountNumber, String name, double balance) {
		// TODO Auto-generated constructor stub
		this.accountNumber = accountNumber;
		this.name = name;
		this.balance = balance;
	}

	public void deposit(double amount) {
		balance += amount;
	}

	public void withdraw(double amount) {
		balance -= amount;

	}

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
