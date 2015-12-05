package com.techlabs.behavioral.observer.ex1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Account {
	double balance;
	String name;
	List<IAccountListener> list;

	public Account(String name, double balance) {
		list = new ArrayList<IAccountListener>();
		this.name = name;
		this.balance = balance;
	}

	public double getBalance() {
		return balance;
	}

	public String getName() {
		return name;
	}

	public List<IAccountListener> getList() {
		return list;
	}

	public void deposite(double amount) {

		balance = balance + amount;
		System.out.println(amount +" is deposited");
		notifAll();

	}
	
	public void withdraw(double amount) {

		balance = balance - amount;
		System.out.println(amount +" is withdrawed");
		notifAll();

	}


	public void addAccListener(IAccountListener listener) {
		list.add(listener);

	}

	private void notifAll() {
		for (IAccountListener temp: getList())
		{
			temp.balanceChanged(this);

		}

	}
}
