"use client";

import { useState, useEffect } from "react";

// Define a function called fetchMealIdeas, which fetches data from the API.
// fetchMealIdeas should take an ingredient as a parameter, make a fetch request and return the meals that include that ingredient.
// The API endpoint for fetching mea ideas is: https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}.
// For example, if the ingredient is "chicken", the API endpoint would be: https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken.
// The API returns a list of meals that include the specified ingredient.
// Each meal has three properties:
//    idMeal: id of the meal
//    strMeal: name of the meal
//    strMealThumb: URL of an image of the meal
// Should be an async function

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ ingredient }) {
  // Define a state vairable using the useState hook: meals. meals will hold the list of meal ideas fetched from the API. Initialize it to an empty array.
  const [meals, setMeals] = useState([]);

  // Define a function called loadMealIdeas which calls the ingredient prop and stores the result in the meals state variable
  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
  }

  // Use the useEffect hook to call the loadMealIdeas function when the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the meal ideas as a list of cards
  // Each card should display the meal's name and an image of the meal
  // If the meals array is empty, display a message saying "No meal ideas found"
  // If the ingredient prop is empty, display a message saying "Select an ingredient to see meal ideas"
  // If the meal div is selected, show a list of the ingredients required, retrieved from the API
  return (
    <div>
      <h2 className="text-2xl font-bold m-2">Meal Ideas</h2>
      <div className="">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-slate-800 p-2 my-2 rounded-lg hover:bg-orange-800 cursor-pointer transition duration-300 ease-in-out"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold">{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
