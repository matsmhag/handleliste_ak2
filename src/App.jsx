import { useState } from 'react';
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";

function makeId(){
  return crypto?.randomUUID?.() ?? String(Date.now())
}

const initialItems = [
  {id: makeId(), name: "Melk", qty: 2, bought: false },
  {id: makeId(), name: "Egg", qty: 1, bought: true},
];

export default function App (){ 
 const [items, setItems] = useState(initialItems);
  

  
  
  
  
  return (
     <main>
      <h1>Handleliste</h1>
      <p>Hvis du ser dette rendrer App</p>
     </main>
  )
};