package com.techlabs.creational.factory.abstractt.ex1;

public abstract class CreditCard {
	private int cardNo;

	public int getCardNo() {
		return cardNo;
	}

	public int getCardLegth() {
		return new Integer(cardNo).toString().length();
	}
	
	public void setCardNo( int cardNo) {
		this.cardNo=cardNo;
	}

}
