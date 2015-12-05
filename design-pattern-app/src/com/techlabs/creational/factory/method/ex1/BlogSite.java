package com.techlabs.creational.factory.method.ex1;

public class BlogSite extends WebSite {
	public BlogSite() {
		createPage();
	}

	@Override
	public void createPage() {
		pageList.add(new PostPage("post"));
		pageList.add(new CommentPage("Comment"));
		pageList.add(new ContactPage("Contact"));

	}
}
