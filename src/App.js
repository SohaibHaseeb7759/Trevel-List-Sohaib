import { useState } from "react";
import States from "./stats";
import PackingList from "./packingList";
import { Item } from "./Item";
import { Form } from "./Form";
import { Logo } from "./Logo";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function addDeleteFunction(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function addToggleFunction(id) {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function addHandleFunction(item) {
    setItems((items) => [...items, item]);
  }

  function deleteAll() {
    const confimed = window.confirm("Are you sure you want delete all items?");
    if (confimed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleClick={addHandleFunction} />
      <PackingList
        items={items}
        deleteFunction={addDeleteFunction}
        toggle={addToggleFunction}
        deleteAll={deleteAll}
      />
      <States items={items} />
    </div>
  );
}
