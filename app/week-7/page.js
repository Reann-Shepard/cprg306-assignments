"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleItemSelect = (name) => {
    // Make sure to clean up the name before setting it, such as the emojis
    name = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
      ""
    );
    setSelectedItemName(name);
  };

  // Ensure that the Shopping list and Meal Ideas are displayed side by side
  // Shopping List and Items should be displayed on the left, and Meal Ideas on the right
  //

  return (
    <main className="bg-slate-950 m-4">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemDelete={handleDeleteItem} />
        </div>
        <div>
          <MealIdeas
            onItemSelect={handleItemSelect}
            ingredient={selectedItemName}
          />
        </div>
      </div>
    </main>
  );
}
