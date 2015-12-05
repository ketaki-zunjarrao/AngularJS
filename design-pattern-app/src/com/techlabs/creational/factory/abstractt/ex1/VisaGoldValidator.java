package com.techlabs.creational.factory.abstractt.ex1;

public class VisaGoldValidator implements IValidator {

	@Override
	public boolean isValid(CreditCard card) {
		// TODO Auto-generated method stub
		return card.getCardLegth() > 0;	}

}
