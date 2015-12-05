package com.techlabs.creational.simplefactory.accountex;

public enum AccountxType {
	INSTANCE;
	public Account createAccount(AccountType type) {

		switch (type) {
		case CURRENT_ACCOUNT:
			return new CurrentAccount();
		case SAVING_ACCOUNT:
			return new SavingAccount();

		default:
			return null;
		}
	}

}
