import React from "react";

function ItemList() {
  return (
    <li className="border-b border-gray-600 hover:text-teal-600 transition ease-in pb-2">
      {" "}
      <a href="#Contact">{item_name}</a>
    </li>
  );
}

export default ItemList;
