package com.techlabs.creational.factory.abstractt.ex1.test;

import com.techlabs.creational.factory.abstractt.ex1.CardType;
import com.techlabs.creational.factory.abstractt.ex1.CreditCard;
import com.techlabs.creational.factory.abstractt.ex1.CreditCardFactory;
import com.techlabs.creational.factory.abstractt.ex1.IValidator;

public class CardTest {
	public static void main(String[] args) {
		CreditCardFactory factory=CreditCardFactory.getCreditCardFactory(800);
		System.out.println(factory.getClass());
		
		CreditCard card=factory.getCreditCard(CardType.GOLD);
		//card.setCardNo(100);
		
		IValidator validator=factory.getValidatir(CardType.GOLD);
		System.out.println(validator.getClass());
		
		if(validator.isValid(card))
			System.out.println("Valid Card");
		else
			System.out.println("Invalid Card");
	}

}
