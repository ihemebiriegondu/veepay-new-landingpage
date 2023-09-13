import React from "react";
import plusIcon from "../../../assets/icons/+ icon.png";
import { Link } from "react-router-dom";

export default function Faqs() {
  const faqs = [
    {
      ques: "What is Veepay",
      ans: "",
    },
    {
      ques: "How do I use my Dashboard",
      ans: "",
    },
    {
      ques: "How do I add and remove my debit card",
      ans: "",
    },
    {
      ques: "What is Bulk SMS",
      ans: "",
    },
    {
      ques: "Can I send International bulk SMS through this plartform",
      ans: "",
    },
    {
      ques: "Do you have a Mobile App",
      ans: "",
    },
  ];

  return (
    <section className="px-20 pb-20">
      <h1 className="text-center font-bold text-4xl mb-6">
        Frequently asked Questions
      </h1>
      <article className="flex flex-col gap-y-6 mb-5">
        {faqs &&
          faqs.map((faq) => (
            <div key={faq.ques} className="border border-primary rounded-lg">
              <div className="flex justify-between items-center px-16 py-7">
                <h6 className="text-xl font-semibold">{faq.ques}</h6>
                <img src={plusIcon} alt="plus icon" />
              </div>
            </div>
          ))}
      </article>
      <div className="text-center">
        <p className="text-xl font-medium">More Questions?</p>
        <Link to={'/'} className="text-primary text-lg italic font-medium underline">Read more</Link>
      </div>
    </section>
  );
}
