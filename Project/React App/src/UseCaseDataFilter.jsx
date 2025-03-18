import { useState, useEffect } from "react";

export default function FilterList() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange", "Mango"]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [newItem, setNewItem] = useState("");

  // Filter items whenever 'search' or 'items' change
  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items]);

  // Add a new item to the list
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Search items..."
        className="w-full p-2 border rounded mb-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="text"
        placeholder="Add new item..."
        className="w-full p-2 border rounded mb-2"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button
        onClick={addItem}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>

      <ul className="mt-4">
        {filteredItems.map((item, index) => (
          <li key={index} className="p-2 border-b">{item}</li>
        ))}
      </ul>
    </div>
  );
}
