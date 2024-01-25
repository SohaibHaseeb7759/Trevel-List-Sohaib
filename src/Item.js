export default function Item({ item, deleteFunction, toggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packad}
        onChange={() => {
          toggle(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteFunction(item.id)}>❌</button>
    </li>
  );
}
