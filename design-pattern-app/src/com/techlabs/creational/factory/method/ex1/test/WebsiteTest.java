package com.techlabs.creational.factory.method.ex1.test;

import java.util.Iterator;

import com.techlabs.behavioral.observer.ex1.IAccountListener;
import com.techlabs.creational.factory.method.ex1.Page;
import com.techlabs.creational.factory.method.ex1.WebSite;
import com.techlabs.creational.factory.method.ex1.WebSiteFactory;
import com.techlabs.creational.factory.method.ex1.WebSiteType;

public class WebsiteTest {
	public static void main(String[] args) {
		WebSite factory = WebSiteFactory.INSTANCE
				.createWebSite(WebSiteType.SHOPPING);
		
		for (Page page : factory.getPage()) {
			page.load();
		}

	}
}