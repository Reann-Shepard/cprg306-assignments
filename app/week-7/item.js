export default function Item({
  id,
  name,
  quantity,
  category,
  onDelete,
  onSelect,
}) {
  return (
    <div
      className="m-4 p-2 max-w-sm bg-slate-900 hover:bg-orange-800 cursor-pointer"
      onClick={() => onSelect(id)}
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
