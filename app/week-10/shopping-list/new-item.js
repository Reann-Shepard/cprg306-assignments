"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const id = Math.random().toString(36);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { id, name, quantity, category };
    console.log(item);
    // alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <main className="m-2 max-w-sm">
      <h2 className="text-xl font-bold">Add New Item</h2>
      <div className="flex justify-left w-full">
        <form
          onSubmit={handleSubmit}
          className="p-2 bg-slate-800 rounded-md border-slate-600 text-black max-w-sm w-full"
        >
          <label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full p-2 mb-2 mt-1 rounded-lg border-2 border-slate-600"
              required
              placeholder="Item name"
            />
          </label>
          <label className="flex justify-between">
            <input
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              min="1"
              max="99"
              className="w-2/12 p-2 mb-2 rounded-lg border-2 border-slate-600"
              required
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-5/12 p-2 mb-2 rounded-lg border-2 border-slate-600"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 rounded-lg shadow-md border-slate-600
                    bg-blue-600  text-white hover:bg-blue-400
                    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
          >
            Add Item
          </button>
        </form>
      </div>
    </main>
  );
}
