
import classes from "./MealsGrid.module.css";
import MealItem from "./meal-item";
const MealsGrid = ({meals}) => {
  return (
  <ul className={classes.meals}>
    {
        meals.map((meal)=><li key={meal.id}>
            {/* Meals Item */}
            <MealItem {...meal}/>
        </li>)
    }
  </ul>
  )
}

export default MealsGrid