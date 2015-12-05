package com.techlabs.creational.factory.abstractt.ex1;

public class AmexPlatinumValidator implements IValidator {

	@Override
	public boolean isValid(CreditCard card) {
		return card.getCardLegth() > 0;
	}

}
