import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Faqs() {
  const faqs = [
    {
      ques: "What is Veepay",
      ans: "Veepay is a three in one telecommunication platform that provides its users with hassle-free experience anytime they use its product. Veepay intends to connect individuals in ways to pay for their favorite services by providing easier, faster and secure ways to recharge your favorite brands.",
    },
    {
      ques: "How do I use my Dashboard",
      ans: "First Login or Sign Up to an account, then go the Settings Page to update your account and Fund your wallet to be able to a Recharge or perform any transaction.",
    },
    {
      ques: "How do I add and remove my debit card",
      ans: "Under your profile section in the settings page, click on Fund wallet to add or remove debit card",
    },
    {
      ques: "What is Bulk SMS",
      ans: "Bulk SMS is a service that enables sending a large number of SMS to multiple users at once. And you will get that service at lower rate here.",
    },
    {
      ques: "Can I send International bulk SMS through this plartform",
      ans: "For now, NO. Veepay is looking to extend its bulk SMS service Internationally and you will be notified as soon as the service is available.",
    },
    {
      ques: "Do you have a Mobile App",
      ans: "For now, NO. We are also working towards building our official Mobile Application and you will be notified as soon as its available.",
    },
  ];

  const [targetElement, setTargetElement] = useState("");

  return (
    <section className="px-20 pb-20">
      <h1 className="text-center font-bold text-4xl mb-6">
        Frequently asked Questions
      </h1>
      <article className="flex flex-col gap-y-6 mb-5">
        {faqs &&
          faqs.map((faq) => (
            <div
              key={faq.ques}
              className="border border-primary rounded-lg px-16 py-7 cursor-pointer"
              dataaccordion={faq.ques}
              onClick={(e) => {
                setTargetElement(e.target.getAttribute("dataaccordion"));
              }}
            >
              <div
                dataaccordion={faq.ques}
                className="flex justify-between items-center"
              >
                <h6
                  dataaccordion={faq.ques}
                  className={`text-xl font-semibold ${
                    targetElement === faq.ques ? "text-primary" : ""
                  }`}
                >
                  {faq.ques}
                </h6>
                <AiOutlinePlus
                  dataaccordion={faq.ques}
                  className={`w-5 h-5 ${
                    targetElement === faq.ques ? "hidden" : "block"
                  }`}
                />
                <AiOutlineMinus
                  dataaccordion={faq.ques}
                  className={`w-5 h-5 ${
                    targetElement === faq.ques ? "block" : "hidden"
                  }`}
                />
              </div>
              <div
                dataaccordion={faq.ques}
                className={`pt-3 ${
                  targetElement === faq.ques ? "block" : "hidden"
                }`}
              >
                <p
                  dataaccordion={faq.ques}
                  className="text-primary font-medium"
                >
                  {faq.ans}
                </p>
              </div>
            </div>
          ))}
      </article>
      <div className="text-center">
        <p className="text-xl font-medium">More Questions?</p>
        <Link
          to={"/"}
          className="text-primary text-lg italic font-medium underline"
        >
          Read more
        </Link>
      </div>
    </section>
  );
}
