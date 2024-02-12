export default function Dog({ id, name, age, onDelete }) {
  return (
    <main>
      <h2>Dog</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button
        className="bg-red-700 text-white rounded-md p-2 m-2"
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </main>
  );
}
