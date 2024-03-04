export default function Item({
  id,
  name,
  quantity,
  category,
  onDelete,
  onSelect,
}) {
  // use addEventListener to determine when the user selects an item
  // use the onSelect prop to pass the selected item to the parent component
  // use the item's id to identify the selected item
  // use the click event to trigger the onSelect function

  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div
      className="m-4 p-2 max-w-sm bg-slate-900 hover:bg-orange-800 cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="text-xl font-bold">
        <button
          className="text-white text-xs font-light rounded-md relative bottom-4 left-full"
          onClick={() => onDelete(id)}
          type="button"
        >
          X
        </button>
        {name}
      </h2>
      <p className="text-sm px-2">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
