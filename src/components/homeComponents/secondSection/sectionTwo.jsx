import React from "react";
import ServicesBox from "./servicesBox";

import arrowIcon from "../../../assets/icons/arrow.svg";
import wifiIcon from "../../../assets/icons/wifi.svg";
import smsIcon from "../../../assets/icons/bulksms.svg";
import tvIcon from "../../../assets/icons/tv.svg";

export default function SectionTwo() {
  const services = [
    { icon: arrowIcon, heading: "SME DATA", visible: false },
    { icon: wifiIcon, heading: "RECHARGE", visible: true  },
    { icon: smsIcon, heading: "BULK SMS", visible: false  },
    { icon: tvIcon, heading: "CABLE TV", visible: false  },
  ];

  return (
    <section className="pt-12 pb-28 px-20">
      <h1 className="text-center font-bold text-4xl mb-6">
        Products and Services
      </h1>
      <p className="text-lg w-2/3 text-center mx-auto mb-8">
        Our sole aim is to provide Bulk SMS, SME Data, And Recharge Plartform
        all at affordable rates. Aside the fact that we sell internet data and
        airtime, you can also pay your Utility bills such as Electricity and
        Cable TV Subscriptions and also sell your airtime to us a cheaper rate
      </p>
      <div className="flex gap-5">
        {services.map((service) => (
          <ServicesBox key={service.heading} icon={service.icon} heading={service.heading} visible={service.visible} />
        ))}
      </div>
    </section>
  );
}
