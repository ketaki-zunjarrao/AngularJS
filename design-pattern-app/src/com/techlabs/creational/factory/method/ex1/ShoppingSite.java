package com.techlabs.creational.factory.method.ex1;

public class ShoppingSite extends WebSite {
	public ShoppingSite() {
		createPage();
	}

	@Override
	public void createPage() {
		pageList.add(new ItemPage("Item"));
		pageList.add(new CartPage("Cart"));
		pageList.add(new PaymentPage("Payment"));
	}

}
