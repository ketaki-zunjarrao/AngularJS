package com.techlabs.structural.iterator.ex1;

import java.util.Iterator;

public class DinnerMenuIterator implements Iterator {
	MenuItem[] items;
	int position = 0;

	public DinnerMenuIterator(MenuItem[] menuItems) {
		this.items = menuItems;
	}

	@Override
	public boolean hasNext() {
		if (position >= items.length || items[position] == null)
			return false;
		else
			return true;
	}

	@Override
	public Object next() {
		MenuItem menuItem = items[position];
		position++;
		return menuItem;
	}

	@Override
	public void remove() {
	}

}
