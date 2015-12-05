package com.techlabs.creational.simplefactory.accountex;

public class AccountFactory {
	private static AccountFactory temp;

	private AccountFactory() {
	}

	public static AccountFactory getInstance() {
		if (temp == null)
			temp = new AccountFactory();
		return temp;
	}

	public Account createAccount(AccountType type) {

		switch (type) {
		case CURRENT_ACCOUNT:
			return new CurrentAccount();
		case SAVING_ACCOUNT:
			return new SavingAccount();

		default:
			return null;
		}
		/*
		 * if (type == AccountType.CURRENT_ACCOUNT) return new CurrentAccount();
		 * else if (type == AccountType.SAVING_ACCOUNT) return new
		 * SavingAccount(); else return null;
		 */
	}
}
