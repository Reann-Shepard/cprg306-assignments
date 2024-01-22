import ItemList from './item-list.js';
import Item from './item.js';

export default function Page() {
       return (
        <main className="bg-slate-950">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <ItemList />
        </main>
       )
}
