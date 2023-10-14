import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import LogoNav from "../components/login&signupComponents/logoNav";
import FormInputs from "../components/allServicesComponents/formInputs";
import FormButtons from "../components/login&signupComponents/formButtons";
import Footer from "../components/footer";
import BulkSmsRecipientsOptionsDropdown from "../components/allServicesComponents/bulkSmsRecipientsOptionsDropdown";

export default function Bulksms() {
  const [recipientOptionsArray, setRecipientOptionsArray] = useState([]);
  const [sender, setSender] = useState("");
  const [subject, setSubject] = useState("");
  //const [body, setBody] = useState("");
  //const [sendType, setSendType] = useState("");

  const [showRecipientDropdown, setShowRecipientDropdown] = useState(false);

  const sendBulkSms = (e) => {
    e.preventDefault();

    console.log(recipientOptionsArray);
    console.log(sender, subject);
  };

  return (
    <div className="lg:bg-servicesBg bg-mobileFormBg">
      <main className="absolute top-0 bottom-0 w-full z-20 lg:bg-servicesBg bg-mobileFormBg flex flex-col justify-between">
        <LogoNav background={"bg-white"} />
        <section className="lg:pt-10 pt-5 md:px-10 xs:px-6 px-4 pb-16 lg:bg-servicesBg bg-mobileFormBg grow">
          <div className="mb-6 mont">
            <Link
              to={"/dashboard"}
              className="lg:flex hidden items-center w-fit text-base font-medium"
            >
              <IoArrowBackOutline className="inline cursor-pointer" />
              <p className="ms-2.5">Back to Homepage</p>
            </Link>
          </div>

          <h1 className="font-bold l:text-4xl lg:text-3xl md:text-2xl text-xl uppercase xl:mb-8 lg:mb-6 md:mb-4 mb-3 text-primary text-center mont">
            Bulk SMS
          </h1>

          <form
            onSubmit={(e) => {
              sendBulkSms(e);
            }}
            className="lg:py-16 md:py-11 py-6 lg:px-20 md:px-12 xs:px-6 px-4 bg-white xl:mx-32 lg:mx-16 mx-0 lg:rounded-t-4xl md:rounded-t-3xl rounded-t-xl lg:rounded-br-4xl md:rounded-br-3xl rounded-br-xl flex flex-col lg:gap-y-8 md:gap-y-6 gap-y-4"
          >
            <div>
              <label
                htmlFor="senderName"
                className="lg:text-xl md:text-lg text-base lg:-mb-2.5 md:-mb-1 mb-0 block w-fit"
              >
                Sender
              </label>
              <FormInputs
                type={"text"}
                id={"senderName"}
                placeholder={"input Sender or Organization name"}
                disabled={false}
                value={""}
                page={"sms"}
                inputChanged={(value) => {
                  setSender(value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="recipientOptions"
                className="lg:text-xl md:text-lg text-base lg:-mb-2.5 md:-mb-1 mb-0 block w-fit"
              >
                Recipient
              </label>

              <BulkSmsRecipientsOptionsDropdown
                showDropdown={showRecipientDropdown}
                setShowDropdown={setShowRecipientDropdown}
                recipientOptionsArray={recipientOptionsArray}
                setRecipientOptionsArray={setRecipientOptionsArray}
              />
            </div>

            <div>
              <label
                htmlFor="smsSubject"
                className="lg:text-xl md:text-lg text-base lg:-mb-2.5 md:-mb-1 mb-0 block w-fit"
              >
                Subject
              </label>
              <FormInputs
                type={"text"}
                id={"smsSubject"}
                placeholder={"write"}
                disabled={false}
                value={""}
                page={"sms"}
                inputChanged={(value) => {
                  setSubject(value);
                }}
              />
            </div>

            <div className="flex flex-col lg:h-52 md:h-40 h-28">
              <label
                htmlFor="messageBody"
                className="lg:text-xl md:text-lg text-base mb-0.5 block w-fit"
              >
                SMS Body
              </label>
              <textarea
                name="messageBody"
                id="messageBody"
                placeholder="Type your message..."
                className="outline-none w-full grow resize-none placeholder-black lg:border-2 border border-servicesInput lg:rounded-md md:rounded rounded-sm lg:ps-2 md:ps-1.5 ps-1 lg:pe-4 md:pe-3 pe-2 lg:py-4 md:py-3 py-2.5 xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs"
              ></textarea>
            </div>

            <div className="flex lg:gap-x-3 md:gap-x-2 gap-x-1 lg:pt-4 md:pt-1 pt-0">
              <p className="lg:text-2xl md:text-lg text-sm font-semibold mont">
                Send:
              </p>
              <div className="lg:text-xl md:text-base text-sm font-medium mont flex flex-col lg:gap-y-4 md:gap-y-3 gap-y-1">
                <div className="flex items-stretch lg:gap-x-4 md:gap-x-2 gap-x-1">
                  <input
                    type="checkbox"
                    name="sendType"
                    id="sendImmediately"
                    className="lg:w-6 md:w-5 lg:h-6 md:h-5"
                  />
                  <label htmlFor="sendImmediately">Immediately</label>
                </div>
                <div className="flex items-stretch lg:gap-x-4 md:gap-x-2 gap-x-1">
                  <input
                    type="checkbox"
                    name="sendType"
                    id="scheduleSend"
                    className="lg:w-6 md:w-5 lg:h-6 md:h-5"
                  />
                  <label htmlFor="scheduleSend">Schedule</label>
                </div>
              </div>
            </div>

            <div className="mx-auto sm:w-1/2 w-4/5 pt-6">
              <FormButtons
                type={"submit"}
                text={"Send"}
                buttonType={"submit"}
                font={"font-bold mont lg:text-3xl md:text-xl text-base"}
              />
            </div>
          </form>
        </section>
        <div className="bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
