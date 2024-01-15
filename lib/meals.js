import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // this is a domy code added just to simulate extra delay

	return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};
