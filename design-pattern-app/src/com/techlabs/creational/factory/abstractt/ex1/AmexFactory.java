package com.techlabs.creational.factory.abstractt.ex1;

public class AmexFactory extends CreditCardFactory {


	@Override
	public CreditCard getCreditCard(CardType type) {
		switch (type) {
		case GOLD:
			return new AmexGold();

		case PLATINUM:
			return new AmexPlatinum();
			
		default:
			return null;
		}
	}

	@Override
	public IValidator getValidatir(CardType type) {
		switch (type) {
		case GOLD:

			return new AmexGoldValidator();

		case PLATINUM:
			return new AmexPlatinumValidator();
		default:
			return null;
		}

	}

}
