"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = async (item) => {
    try {
      const userId = user.uid;
      await addItem(userId, item);
      setItems([...items, item]);
      loadItems();
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  // const handleDeleteItem = async (id) => {
  //   try {
  //     const userId = user.uid;
  //     await deleteItem(userId, id);
  //     setItems(items.filter((item) => item.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting item: ", error);
  //   }
  // };

  const handleItemSelect = (id) => {
    // Make sure to clean up the name before setting it, such as the emojis
    const name = items.find((item) => item.id === id).name;
    let cleanedName = name.split(",")[0];
    cleanedName = cleanedName.replace(/[^a-z0-9\s,]/gi, "").trim();
    console.log(cleanedName);
    setSelectedItemName(cleanedName);
  };

  const loadItems = async () => {
    try {
      const userId = user.uid;
      const items = await getItems(userId);
      setItems(items);
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  };

  useEffect(() => {
    if (user) {
      console.log("Logged in as : ", user.email);
      loadItems();
      console.log("pre-load");
    }
  }, [user]);

  // If the user is not logged in, provide a button that redirect them to the login page with the following message: "Please log in to view your shopping list."
  if (!user) {
    return (
      <div>
        <h1>Please log in to view your shopping list.</h1>
        <button
          className="w-24 p-2 m-2 ml-16 bg-orange-500 text-white rounded hover:bg-orange-900"
          onClick={() => (location.href = "/week-10")}
        >
          Sign in page
        </button>
      </div>
    );
  }

  // Ensure that the Shopping list and Meal Ideas are displayed side by side
  // Shopping List and Items should be displayed on the left, and Meal Ideas on the right

  return (
    <main className="bg-slate-950 m-4">
      <div>
        {user?.displayName && <h1>Welcome, {user.displayName}</h1>}
        <p>Your email is {user?.email}</p>
        <button
          className="w-24 p-2 m-2 ml-16 bg-orange-500 text-white rounded hover:bg-orange-900"
          onClick={firebaseSignOut}
        >
          Sign out
        </button>
      </div>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList
            items={items}
            // onDeleteItem={handleDeleteItem}
            onSelectItem={handleItemSelect}
          />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
