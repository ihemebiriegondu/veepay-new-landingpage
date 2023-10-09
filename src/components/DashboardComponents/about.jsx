import React from "react";

export default function About() {
  return (
    <section className="flex flex-col sm:gap-2.5 gap-3 mont text-black md:text-lg sm:text-base text-sm">
      <h1 className="lg:text-xl text-lg font-bold md:mb-7 mb-5 text-center md:pt-10 pt-5 1.5xl:hidden">
        About Us
      </h1>

      <article className="pt-5 sm:px-12 px-5 sm:pb-6 pb-5 bg-white">
        <div className="1.5xl:block hidden pt-8">
          <h2 className="text-2xl text-primary font-semibold mb-1">Veepay</h2>
          <h3 className="font-medium text-primary mb-8">
            (Feed your network, live better)
          </h3>
        </div>
        <p className="sm:mb-4 mb-3">
          Veepay is a three in one telecommunication platform that provide Bulk
          sms, SME data and Recharge platforms which aims to increase lifetime
          value and customer engagement through our products.
        </p>
        <p className="">
          Veepay intends to connect individuals with ways to pay for their
          favorite service. We hope to serve millions of customers by providing
          easier, faster and secure ways to recharge their brands.
        </p>
      </article>

      <article className="sm:py-4 py-5 sm:px-12 px-5 bg-white">
        <h3 className="text-primary md:mb-4 sm:mb-2 mb-0.5 sm:text-lg text-base">A BULK SMS PLATFORM</h3>
        <p>
          Veepay will offers bulk sms at subsidized rate. We aspire to be the go
          to online place for bulk sms for clients who wants to deliver messages
          cutting across different sectors.
        </p>
      </article>

      <article className="sm:py-4 py-5 sm:px-12 px-5 bg-white">
        <h3 className="text-primary md:mb-4 sm:mb-2 mb-0.5 sm:text-lg text-base">SME DATA PLATFORM</h3>
        <p>
          Veepay plans to earn your trust in every interaction to provide
          network data at the lowest cost possible. Which will enable workflow
          and delight customers.
        </p>
      </article>

      <article className="sm:pt-4 pt-5 sm:pb-16 pb-6 sm:px-12 px-5 bg-white">
        <h3 className="text-primary md:mb-4 sm:mb-2 mb-0.5 sm:text-lg text-base">RECHARGE PLATFORM</h3>
        <p className="sm:mb-4 mb-3">
          Veepay intends to be the swift way for individuals to top up their
          favorite mobile network brands and also make subscriptions for your
          cable TV. We will deliver wide adequate and effective top-ups in less
          than a minute. Creating a seamless experience for customers to manage
          mobile top-ups.
        </p>
        <p>
          Further more, we also want to create an avenue for customers and users
          to be able to sell airtime directly on our channel in order to solve
          the problem of overloaded airtime.
        </p>
      </article>
    </section>
  );
}
