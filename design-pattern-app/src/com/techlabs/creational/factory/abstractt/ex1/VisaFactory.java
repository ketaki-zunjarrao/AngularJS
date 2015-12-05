package com.techlabs.creational.factory.abstractt.ex1;

public class VisaFactory extends CreditCardFactory {

	@Override
	public CreditCard getCreditCard(CardType type) {
		switch (type) {
		case GOLD:

			return new VisaGold();

		case PLATINUM:
			return new VisaPlatinum();
		default:
			return null;}
}

	@Override
	public IValidator getValidatir(CardType type) {
		switch (type) {
		case GOLD:

			return new VisaGoldValidator();

		case PLATINUM:
			return new VisaPlatinumValidator();
		default:
			return null;}
	}

}
