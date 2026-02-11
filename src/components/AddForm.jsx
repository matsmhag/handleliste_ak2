import { useState } from "react"

export default function AddForm({ onAdd }) {
  const [name, setName] = useState("")
  const [qty, setQty] = useState("")
  const [error, setError] = useState("")

  function submitHandler(e) {
    e.preventDefault()

    const trimmedName = name.trim()
    const numberQty = Number(qty)

    if (!trimmedName && !qty) {
      setError("Du må skrive inn vare og antall.")
      return
    }

    if (!trimmedName) {
      setError("Du må skrive inn en vare.")
      return
    }

    if (!qty) {
      setError("Du må skrive inn antall.")
      return
    }

    if (Number.isNaN(numberQty) || numberQty < 1) {
      setError("Antall må være minst 1.")
      return
    }

    setError("")
    onAdd(trimmedName, numberQty);

    setName("")
    setQty("")
  }

  return (
    <form onSubmit={submitHandler}>
      <fieldset>
        <legend>Legg til vare</legend>

        <label>
          Vare
          <input
            placeholder="Egg..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Antall
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </label>

        <button type="submit">Legg til vare</button>

        {error ? <p role="alert">{error}</p> : null}
      </fieldset>
    </form>
  )
}
