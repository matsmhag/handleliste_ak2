import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ items, onToggle, onQtyChange }) {
  return (
    <ul aria-label="Handleliste">
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onQtyChange={onQtyChange}
        />
      ))}
    </ul>
  )
}
