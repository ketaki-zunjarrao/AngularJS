package com.techlabs.creational.factory.method.ex1;

import java.util.ArrayList;
import java.util.List;

public abstract class WebSite {
	protected List<Page> pageList;

	public WebSite() {
		pageList = new ArrayList<Page>();
	}

	public abstract void createPage();

	public List<Page> getPage() {
		return pageList;
	}

}
