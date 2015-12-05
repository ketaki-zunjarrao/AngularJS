package com.techlabs.creational.factory.abstractt.ex1;

import java.net.URL;

public abstract class CreditCardFactory {

	public static CreditCardFactory getCreditCardFactory(int creditScore) {
		if (creditScore > 1000)
			return new AmexFactory();
		else
			return new VisaFactory();
	}

	public abstract CreditCard getCreditCard(CardType type);

	public abstract IValidator getValidatir(CardType type);
//URL
}

