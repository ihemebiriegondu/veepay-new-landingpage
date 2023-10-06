import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function SettingFAQs() {
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
  const [isOpened, setIsOpened] = useState(false);

  return (
    <article className="flex flex-col lg:gap-y-6 gap-y-2 lg:mb-5 mb-3 lg:pt-10 pt-6">
      <h1 className="lg:text-2xl text-lg text-primary font-semibold mb-5 text-center">FAQs</h1>
      {faqs &&
        faqs.map((faq) => (
          <div
            key={faq.ques}
            className="bg-white lg:rounded-lg rounded-sm lg:px-12 md:px-8 px-4 lg:py-5 md:py-3.5 py-2.5 cursor-pointer"
            dataaccordion={faq.ques}
            onClick={(e) => {
              if (targetElement === e.target.getAttribute("dataaccordion")) {
                setIsOpened(true);
              } else {
                setIsOpened(false);
              }
              setTargetElement(e.target.getAttribute("dataaccordion"));
            }}
          >
            <div
              dataaccordion={faq.ques}
              className="flex justify-between items-center gap-2 xs:text-base text-sm"
            >
              <h6
                dataaccordion={faq.ques}
                className={`text-primary font-semibold basis-11/12 ${
                  targetElement === faq.ques && !isOpened ? "text-primary" : ""
                }`}
              >
                {faq.ques}
              </h6>
              <AiOutlinePlus
                dataaccordion={faq.ques}
                className={`${
                  targetElement === faq.ques && !isOpened ? "hidden" : "block"
                }`}
              />
              <AiOutlineMinus
                dataaccordion={faq.ques}
                className={`${
                  targetElement === faq.ques && !isOpened ? "block" : "hidden"
                }`}
              />
            </div>
            {!isOpened && (
              <div
                dataaccordion={faq.ques}
                className={`xs:pt-2 pt-1.5 pe-4 ${
                  targetElement === faq.ques ? "block" : "hidden"
                }`}
              >
                <p
                  dataaccordion={faq.ques}
                  className="text-primary font-medium xs:text-sm text-xs"
                >
                  {faq.ans}
                </p>
              </div>
            )}
          </div>
        ))}
    </article>
  );
}
