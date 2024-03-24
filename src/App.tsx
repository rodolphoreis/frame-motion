import "./styles.css";
import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";

const initialItems = [
  "🍅 Tomate",
  "🥒 Curgete",
  "🧀 Queijo",
  "🥬 Couve",
  "🌶️ Pimenta",
  "🌽 Milho",
  "🥩 Carne",
  "🧅 Cebola",
  "🥖 Pão",
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}
