import React from "react";

export default function SmsTable() {
  const tableValues = [
    { range: "1 - 1,000", price: "N1.6" },
    { range: "1,000 - 2,000", price: "N1.5" },
    { range: "2,000 - 5,000", price: "N1.4" },
    { range: "5,000 - 10, 000", price: "N1.3" },
    { range: "10,000 - 100,000", price: "N1.2" },
    { range: "100,000 - 500,000", price: "N1.1" },
    { range: "500,000 - 3,000,000", price: "N1" },
  ];

  return (
    <table className="table table-fixed w-full">
      <thead>
        <tr className="xlg:text-2xl lg:text-lg md:text-sm text-xxs text-center">
          <th className="text-left xlg:py-4 lg:py-3 md:py-2 py-1 xlg:ps-4 lg:ps-2 xs:ps-1">
            RECIPIENT RANGE
          </th>
          <th>PRICE PER BULK SMS PAGE</th>
        </tr>
      </thead>
      <tbody>
        {tableValues &&
          tableValues.map((tableValue, i) => (
            <tr
              key={tableValue.range}
              className={`xlg:text-xl lg:text-base md:text-xs text-xxxs font-medium text-center ${
                i % 2 === 0 ? "bg-tableRow/60" : ""
              }`}
            >
              <td className="text-left xlg:py-4 lg:py-3 md:py-2 py-1 lg:ps-9 md:ps-4 sm:ps-2 ps-1.5">
                {tableValue.range}
              </td>
              <td>{tableValue.price}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
