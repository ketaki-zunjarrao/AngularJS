package com.techlabs.creational.simplefactory.accountex.test;

import com.techlabs.creational.simplefactory.accountex.Account;
import com.techlabs.creational.simplefactory.accountex.AccountFactory;
import com.techlabs.creational.simplefactory.accountex.AccountType;
import com.techlabs.creational.simplefactory.accountex.AccountxType;

public class AccountTest {
	public static void main(String[] args) {
		// Account account1 = AccountFactory.getInstance().createAccount(
		// AccountType.SAVING_ACCOUNT);
		Account account1 = AccountxType.INSTANCE
				.createAccount(AccountType.CURRENT_ACCOUNT);
		account1.setAccountNumber(101);
		account1.setBalance(5000);
		account1.setName("Ketaki");
		account1.withdraw(1000);

	}
}
