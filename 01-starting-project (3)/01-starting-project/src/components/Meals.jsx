
import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';

export default function Meals() {
 const {
  data: loadedMeals,
   isLoading, 
  error,
}= useHttp('http://localhost:3000/meals', {}, []);

console.log(loadedMeals);

 if (isLoading) {
  return <p>Fetching meals...</p>;
 }

  return (
    <ul id="meals">
      {loadedMeals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}


