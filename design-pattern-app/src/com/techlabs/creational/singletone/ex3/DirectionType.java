package com.techlabs.creational.singletone.ex3;

public enum DirectionType {
	EAST, WEST, NORTH, SOUTH;

	/*
	 * public DirectionType getOpposite(DirectionType type) { switch (type) {
	 * case EAST: return WEST; case WEST: return EAST; case NORTH: return SOUTH;
	 * case SOUTH: return NORTH; default: return null; }
	 * 
	 * }
	 */

	public DirectionType getOppositeType() {
		switch (this) {
		case EAST:
			return WEST;
		case WEST:
			return EAST;
		case NORTH:
			return SOUTH;
		case SOUTH:
			return NORTH;
		default:
			return null;

		}
	}
}
