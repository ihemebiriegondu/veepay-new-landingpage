import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { GiPaperClip } from "react-icons/gi";
import ContactSelectedToast from "./contactSelectedToast";

export default function BulkSmsRecipientsOptionsDropdown(props) {
  //check if browser supports the contact picker api
  const supported = "contacts" in navigator && "ContactsManager" in window;
  //console.log(supported);

  const [recipients, setRecipients] = useState([]);

  const [placeholder, setPlaceholder] = useState(
    "Input Numbers or select other options"
  );

  const getContact = async () => {
    const props = ["name", "tel"];
    const opts = { multiple: true };

    try {
      const contacts = await navigator.contacts.select(props, opts);
      setRecipients(contacts);

      contacts.forEach((contact) => {
        console.log(contact.name);
        alert(contact.name);
        alert(contact.tel[0]);
      });
    } catch (error) {
      // Handle any errors here.
    }
      //props.setShowDropdown(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center justify-between overflow-hidden transition duration-100 ease-in-out lg:my-3 md:my-1.5 my-0.5 lg:border-2 border relative ${
          props.showDropdown
            ? "border-servicesInputFocused"
            : "border-servicesInput"
        } text-black lg:rounded-md md:rounded rounded-sm xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs`}
      >
        <input
          name={"recipientOptions"}
          id={"recipientOptions"}
          type="tel"
          placeholder={placeholder}
          disabled={props.showDropdown}
          className={`outline-none border-none inline-block grow lg:py-4 md:py-3 py-2.5 lg:ps-2 md:ps-1.5 ps-1 ${
            props.showDropdown && "placeholder:text-black"
          }`}
          onChange={(e) => {
            props.inputChanged(e.target.value);
          }}
        />
        <button
          type="button"
          className="lg:px-4 md:px-3 px-2 lg:py-4 md:py-3 py-2.5 relative outline-none"
        >
          <IoChevronDownOutline className="relative z-20" />
          <p
            className="absolute top-0 bottom-0 w-full left-0 z-30"
            onClick={() => {
              props.setShowDropdown(!props.showDropdown);
              setPlaceholder(
                !props.showDropdown
                  ? "Select options"
                  : "Input Numbers or select other options"
              );
            }}
          ></p>
        </button>

        {recipients.length > 0 && (
          <ContactSelectedToast amount={recipients.length} />
        )}
      </div>

      {props.recipientOptions !== "" && (
        <p className="lg:-mt-1.5 md:-mt-0.5 mt-0 lg:text-sm text-xs text-gray-500">
          Separate numbers with commas
        </p>
      )}

      <ul
        className={`dropdownElement absolute z-30 w-full lg:border-2 border border-servicesInput lg:rounded-xl md:rounded-md rounded flex flex-col lg:divide-y divide-y-0.3 divide-primary transition-all duration-100 ease bg-white overflow-hidden ${
          !props.showDropdown && "invisible"
        }`}
      >
        <li
          className="flex items-center justify-between gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs"
          onClick={() => {
            getContact();
          }}
        >
          <span>Select from Contacts</span>
          {!supported && (
            <span className="text-warning xl:text-sm md:text-xs md:inline-block hidden font-thin">
              This browser does NOT support upload from contacts
            </span>
          )}
        </li>
        <li className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs">
          Upload contacts from Google Drive
        </li>
        <li className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs">
          Upload contact file
          <GiPaperClip />
        </li>
      </ul>
    </div>
  );
}
