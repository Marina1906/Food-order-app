import { useState, useEffect } from 'react';
import MealItem from './MealItem.jsx';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  async function fetchMeals() {
    try {
      const response = await fetch('http://localhost:3000/meals');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  return (
    <ul id="meals">
      {loadedMeals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

