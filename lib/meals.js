import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // this is a domy code added just to simulate extra delay

	//throw new Error("Loading meals failed");
	return db.prepare("SELECT * FROM meals").all();
};
