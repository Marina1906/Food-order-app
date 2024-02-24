
import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './util/store/Error.jsx';

const requestConfig = {};

export default function Meals() {
 const {
  data: loadedMeals,
   isLoading, 
  error,
}= useHttp('http://localhost:3000/meals',requestConfig, []);

console.log(loadedMeals);

 if (isLoading) {
  return <p className='center'>Fetching meals...</p>;
 }

 if (error) {
  <Error title="Failed to fetch meals" message={error}/>;
 }

  return (
    <ul id="meals">
      {loadedMeals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}


