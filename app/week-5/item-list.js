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

  let sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "group") {
      return a.category.localeCompare(b.category);
    }
  });

  // Include new functionality to include a third button that sorts the items of the same category together
  // Make sure this is another grouping and doesn't affect the sorting of the items by category
  // Use reduce to group the items by category

  if (sortBy === "group") {
    sortedItems = sortedItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }

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
        <button
          className={`${
            sortBy === "group" ? "bg-orange-500" : "bg-orange-900"
          } text-white m-2 w-32 rounded`}
          onClick={() => setSortBy("group")}
        >
          Grouped Category
        </button>
      </div>
      <div>
        {sortBy === "group" &&
          Object.keys(sortedItems).map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-bold m-2 text-transform: capitalize">
                {category}
              </h2>
              {sortedItems[category].map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </div>
          ))}
        {sortBy !== "group" &&
          sortedItems.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </div>
  );
}
