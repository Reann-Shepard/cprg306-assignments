// Create functional component named Item
// Should contain name, quantity, category as props and display them in a list item element
// Use Tailwind classes for styling

export default function Item({ id, name, quantity, category }) {
  // Add functionality that allows user to click on item to mark it as purchased
  // Hint: use state to track whether item has been purchased or not

  return (
    <div className="mx-4 my-4 p-2 w-96 bg-slate-900">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
