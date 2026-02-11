
import { useState } from "react"
import AddForm from "./components/AddForm"
import ShoppingList from "./components/ShoppingLIst"

const startListe = [
  { id: 1, name: "Melk", qty: 2, bought: false },
  { id: 2, name: "Egg", qty: 1, bought: true },
];

export default function App() {
  const [items, setItems] = useState(startListe)
  const [nextId, setNextId] = useState(3)

  function leggTilVare(name, qty) {
    const nyVare = {
      id: nextId,
      name,
      qty,
      bought: false,
    };

    setItems((prev) => [nyVare, ...prev]); // ny vare øverst
    setNextId((prev) => prev + 1)
  }

  function toggleKjopt(id) {
    setItems((prev) =>
      prev.map((vare) =>
        vare.id === id ? { ...vare, bought: !vare.bought } : vare
      )
    );
  }

  function oppdaterAntall(id, nyttAntall) {
    if (nyttAntall < 1) return

    setItems((prev) =>
      prev.map((vare) => (vare.id === id ? { ...vare, qty: nyttAntall } : vare))
    );
  }

  return (
    <main>
      <header>
        <h1>Handleliste</h1>
      </header>

      <section aria-label="Legg til vare">
        <AddForm onAdd={leggTilVare} />
      </section>

      <section aria-label="Varer i handlelisten">
        <ShoppingList items={items} onToggle={toggleKjopt} onQtyChange={oppdaterAntall} />
      </section>
    </main>
  )
}
