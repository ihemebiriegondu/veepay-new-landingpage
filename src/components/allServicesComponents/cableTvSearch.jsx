import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function CableTvSearch(props) {
  return (
    <div
      id="searchBar"
      className="hidden items-center lg:gap-1 md:gap-0.5 gap-px w-full bg-gray-200 lg:px-3 md:px-2 px-1 lg:text-xl md:text-base text-sm lg:rounded-xl md:rounded-md rounded lg:mb-3 md:mb-1.5 mb-0.5"
    >
      <IoMdSearch className="text-black/70" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a Payment Item"
        className="outline-none grow bg-gray-200 lg:py-4 md:py-2 py-1"
        onChange={(e) => {
          let value = e.target.value;

          if (props.allItems.length > 1) {
            const newPaymentItems = [];

            props.allItems.forEach((item) => {
              let subItem = item.item.toLocaleLowerCase();
              if (subItem.includes(value.toLocaleLowerCase())) {
                newPaymentItems.push(item);
              }
            });
            props.setItems(newPaymentItems);
          }
        }}
      />
    </div>
  );
}
