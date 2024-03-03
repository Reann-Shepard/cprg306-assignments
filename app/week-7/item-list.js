"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onDelete }) {
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

  if (sortBy === "group") {
    sortedItems = sortedItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        // this line is checking if the category exists in the accumulator
        acc[item.category] = []; // this line is creating a new array for each category
      }
      acc[item.category].push(item); // this line is pushing the item into the array for the category
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
                <Item key={item.id} {...item} onDelete={onDelete} />
              ))}
            </div>
          ))}
        {sortBy !== "group" &&
          sortedItems.map((item) => (
            <Item key={item.id} {...item} onDelete={onDelete} />
          ))}
      </div>
    </div>
  );
}
