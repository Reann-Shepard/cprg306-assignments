"use client";

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");


    // Prevent the form's default submission behavior.
    // Create an item object with the current values of name, quantity, and category.
    // Log the item object to the console.
    // Display an alert with the current state of name, quantity, and category.
    // Reset the state variables to their initial values.
    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {name, quantity, category};
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }


    // Name Field
    // Create an input field of type text.
    // The value of the input field should be tied to the name state variable, meaning that it displays the current value of name.
    // Use the setName function in an onChange event handler to update the state of name as the user types into the field.
    // Add required attribute to the input field to ensure that the user cannot submit the form without providing a name.
    // Default name should be "Item name"
    //
    // Quantity Field
    // Create an input field of type number.
    // Set the min attribute to "1" and the max attribute to "99" to limit the range of valid quantities.
    // The value of the input field should be tied to the quantity state variable.
    // Use the setQuantity function in an onChange event handler to update the state of quantity as the user types into the field. Make sure to convert
    // the input to a Number before setting the state.
    // Add required attribute to the input field to ensure that the user cannot submit the form without providing a quantity.
    // Default quantity should be "1"
    //
    // Category Field
    // Create a select element for the category.
    // The value of the select element should be tied to the category state variable.
    // Use the setCategory function in an onChange event handler to update the state of category as the user selects a different option.
    // Create various option elements within the select for each possible category ("Produce", "Dairy", "Bakery", "Meat", "Frozen Foods",
    // "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"). Each option should have a value that matches the category it represents.
    // The default category should be "Produce".
    //
    // Submit Button
    // Create a button of type submit.
    // The button should have the text "Add Item".
    //
    // All input boxes should be rounded with a grey border with a white background, the submit button should be rounded with a blue background and white text.
    // Input boxes need padding p-2 and margin m-2 to space them out and make them look nice.
    // Item name input should span the full width of the form.
    // The form should be centered on the page.
    // The form should have a slate background color with lighter slate borders with rounded edges.
    // Quantity and Category Field should be on the same line, Quantity Field should be on the left and small, Category Field should be on the right and 1/3 size.
    


    return (
        <div>
            <h2>Add an Item</h2>
            <form onSubmit={handleSubmit} className="w-1/4 m-auto p-4 bg-slate-800 rounded-md border-2 border-slate-600">
                <label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="w-full p-2 mb-2 bg-white rounded-md border-2 border-slate-850 text-black"
                        required
                        placeholder="Item name"
                    />
                </label>
                <br />
                <label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(event) => setQuantity(Number(event.target.value))}
                        min="1"
                        max="99"
                        className="w-1/6 p-2 mb-2 bg-white rounded-md border-2 border-slate-850 text-black"
                        required
                    />
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="w-1/3 bg-white rounded-md border-2 border-slate-850 text-black"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br />
                <label>

                </label>
                <br />
                <button
                    type="submit"
                    className="w-full bg-blue-600 border-white 
                    hover:bg-blue-300 active:bg-yellow-300 rounded-md text-white"
                >Add Item</button>
            </form>
        </div>
    )
}