package com.techlabs.structural.proxy.ex1.test;

import com.techlabs.structural.proxy.ex1.AccountProxy;

public class TestAccountProxy {

	public static void main(String[] args) {

		AccountProxy account1 = new AccountProxy(101, "Ketaki", 1000);

		System.out.println("Name " + account1.getName() + "Account No "
				+ account1.getAccountNumber()+" Balance "+account1.getBalance());
		account1.deposit(200);

	}

}
