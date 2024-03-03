"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ meals }) {
  const [meals, setMeals] = useState([]);

  //   Next, outside your component, define a function called fetchMealIdeas, which fetch data from the API. fetchMealIdeas should take an ingredient as a parameter, make a fetch request to the TheMealDB API, and return the meals that include that ingredient.
  //   The API endpoint for fetching meal ideas is: https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}. For example, if the ingredient is "chicken", the API endpoint would be: https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken. The API returns a list of meals that include the specified ingredient. Each meal has three properties:
  //   idMeal: id of the meal
  //   strMeal: name of the meal
  //   strMealThumb: URL of an image of the meal

  const fetchMealIdeas = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setMeals(data.meals);
  };

  //   Next, inside your component, define a function called loadMealIdeas. This function should call fetchMealIdeas with the ingredient prop and store the result in the meals state variable.
  //   Use the useEffect hook to call loadMealIdeas when the component mounts and when the ingredient prop changes.

  const loadMealIdeas = () => {
    fetchMealIdeas(ingredient);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  //   Finally, define your component's render method. This should return a div that includes a header and a list of meals. Each meal should be a list item that displays the meal's name.

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
