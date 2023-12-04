export default function StatusFooter({ items }) {
  const packedItemsCounter = items.filter(el => el.packed).length;
  const allItemsCounter = items.length;
  const percentage = Math.round(packedItemsCounter / (allItemsCounter || 1) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go!'
          :`You have ${allItemsCounter} items on you list, and you already packed ${packedItemsCounter} (${percentage}%)`}
      </em>
    </footer>
  )
}