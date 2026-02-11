export default function ShoppingItem({ item, onToggle, onQtyChange }) {
  function qtyChangeHandler(e) {
    const value = Number(e.target.value)
    onQtyChange(item.id, value)
  }

  return (
    <li>
      <article>
        <label>
          <input
            type="checkbox"
            checked={item.bought}
            onChange={() => onToggle(item.id)}
          />
          {item.name}
        </label>

        <label>
          Antall
          <input
            type="number"
            min={1}
            value={item.qty}
            onChange={qtyChangeHandler}
          />
        </label>
      </article>
    </li>
  )
}
