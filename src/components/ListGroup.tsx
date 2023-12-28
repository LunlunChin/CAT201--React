function ListGroup() {
  let items = ["Item 1", "Item 2", "Item 333"];
  //   items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List of Items</h1>
        <p>There are no items in the list</p>;
      </>
    );

  return (
    <>
      <h1>List of Items</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
