import styles from "@/app/components/styles/meals-grid.module.css";
import MealItem from "./meals-item";
const MealsGrid = ({ meals }) => {
	return (
		<ul className={styles.meals}>
			{meals.map((meal) => {
				return (
					<li key={meal.id}>
						<MealItem {...meal} />
					</li>
				);
			})}
		</ul>
	);
};
export default MealsGrid;
