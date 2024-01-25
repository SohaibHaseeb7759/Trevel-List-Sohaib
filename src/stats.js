export default function States({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding items to your list 🚀</em>
        </p>
      );
  
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const perItem = Math.round((packedItems / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {perItem === 100
            ? "Yo got everything, ready to go ✈"
            : `You have ${numItems} item on your list, and you already packed 
          ${packedItems} (${perItem}%)`}
        </em>
      </footer>
    );
  }