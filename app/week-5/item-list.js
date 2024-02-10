// Create a functional component named ItemList
// Render these items using the Item component, passing data item as props

"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  // Use the useState hook to create a state variable sortBy and its setter function setSortBy. This will be used to determine the sorting preference of the user.
  // Set the initial value of sortBy to "name", indicating that the list should initially be sorted by name.
  //
  // Use JavaScript's sort function to sort the items array based on the sortBy state variable.
  //    If sortBy is "name", sort the items by their name property.
  //    If sortBy is "category", sort the items by their category property.
  //
  // Create two buttons that allow the user to change the value of sortBy to "name", "category"
  //    These buttons should change the sorting of the items when clicked.
  // Use the setSortBy function in the onClick event handlers of these buttons to change the value of sortBy.
  // Use conditional rendering to change the background color of the buttons based on the current value of sortBy.
  //    This gives the user a visual indication of what the current sorting preference is.

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="flex justify-normal">
        <label>Sort by: </label>
        <button
          className={`${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-900"
          } text-white m-2 w-32 rounded`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-900"
          } text-white m-2 w-32 rounded`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
