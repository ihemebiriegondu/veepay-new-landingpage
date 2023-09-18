import React from "react";

export default function DataTable() {
  const tableValues = [
    {
      value: "500 mb",
      days: "30",
      mtn: "N150",
      glo: "(14 Days) <br /> 1.3 gb/N500",
      airt: "N225",
      etis: "N450",
    },
    {
      value: "1 gb",
      days: "30",
      mtn: "N290",
      glo: "2.9 gb/N1,000",
      airt: "N400",
      etis: "1.5 gb/N950",
    },
    {
      value: "2 gb",
      days: "30",
      mtn: "N585",
      glo: "4.1 gb/N1,500",
      airt: "N800",
      etis: "4.5 gb/N2,000",
    },
    {
      value: "3 gb",
      days: "30",
      mtn: "N870",
      glo: "5.8 gb/N2,000",
      airt: "N1,200",
      etis: "11 gb/N3,999",
    },
    {
      value: "5 gb",
      days: "30",
      mtn: "N1,450",
      glo: "7.7 gb/N2,500",
      airt: "N2,000",
      etis: "15 gb/N4,999",
    },
    {
      value: "6 gb",
      days: "7",
      mtn: "N1,500",
      glo: "",
      airt: "N1,500",
      etis: "",
    },
    {
      value: "10 gb",
      days: "30",
      mtn: "N2,900",
      glo: "11 gb/N3,000",
      airt: "N3,000",
      etis: "",
    },
    {
      value: "20 gb",
      days: "30",
      mtn: "N5,000",
      glo: "12 gb/N5,000",
      airt: "N4,999",
      etis: "",
    },
    {
      value: "40 gb",
      days: "30",
      mtn: "N10,000",
      glo: "29.5 gb/N8,000",
      airt: "N9,999",
      etis: "N10,000",
    },
    {
      value: "75 gb",
      days: "30",
      mtn: "N15,000",
      glo: "50 gb/N10,000",
      airt: "N14,999",
      etis: "N15,000",
    },
    {
      value: "120 gb",
      days: "60",
      mtn: "N30,000",
      glo: "93 gb/N15,000",
      airt: "N20,000",
      etis: "",
    },
  ];

  return (
    <table className="table table-fixed w-full">
      <thead>
        <tr className="xlg:text-2xl lg:text-lg md:text-sm text-xxs text-center">
          <th className="xlg:text-left xlg:py-4 lg:py-3 md:py-2 py-1 xlg:ps-4 lg:ps-2 xs:ps-1">DATA VALUE</th>
          <th className="bg-formBg/30">DAYS</th>
          <th>MTN</th>
          <th className="bg-formBg/30">GLO</th>
          <th>AIRTEL</th>
          <th className="bg-formBg/30">9MOBILE</th>
        </tr>
      </thead>
      <tbody>
        {tableValues &&
          tableValues.map((tableValue, i) => (
            <tr key={tableValue.value} className={`xlg:text-xl lg:text-base md:text-xs text-xxxs font-medium text-center ${i%2 === 0 ? 'bg-tableRow/60' : ''}`}>
              <td className="xs:text-left xlg:py-4 lg:py-3 md:py-2 py-1 sm:ps-9 xs:ps-4">{tableValue.value}</td>
              <td className="bg-formBg/30">{tableValue.days}</td>
              <td>{tableValue.mtn}</td>
              <td className="bg-formBg/30" dangerouslySetInnerHTML={{ __html: tableValue.glo }}></td>
              <td>{tableValue.airt}</td>
              <td className="bg-formBg/30">{tableValue.etis}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
