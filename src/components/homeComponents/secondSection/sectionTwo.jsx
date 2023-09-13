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
    <section className="lg:pt-12 pt-7 lg:pb-28 pb-9 lg:px-20 px-6">
      <h1 className="text-center font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:mb-6 mb-2.5">
        Products and Services
      </h1>
      <p className="lg:text-lg md:text-base text-sm xl:w-2/3 lg:w-3/4 md:w-4/5 w-full text-center mx-auto mb-8">
        Our sole aim is to provide Bulk SMS, SME Data, And Recharge Plartform
        all at affordable rates. Aside the fact that we sell internet data and
        airtime, you can also pay your Utility bills such as Electricity and
        Cable TV Subscriptions and also sell your airtime to us a cheaper rate
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {services.map((service) => (
          <ServicesBox key={service.heading} icon={service.icon} heading={service.heading} visible={service.visible} />
        ))}
      </div>
    </section>
  );
}
