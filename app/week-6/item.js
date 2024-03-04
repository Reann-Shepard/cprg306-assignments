export default function Item({ id, name, quantity, category, onDelete }) {
  return (
    <div className="mx-4 my-4 p-2 w-96 bg-slate-900">
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
      <p className="text-sm p-2">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
