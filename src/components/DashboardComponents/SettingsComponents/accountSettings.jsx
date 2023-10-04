import React, { useState } from "react";
import SettingInputs from "./settingInputs";
import FeedBackModal from "./feedBackModal";

export default function AccountSetting(props) {
  const [bankName, setBankName] = useState(props.bankDetails.bankName);
  const [accName, setAccName] = useState(props.bankDetails.accName);
  const [accNo, setAccNo] = useState(props.bankDetails.accNo);

  const [error, setError] = useState(false);
  const [succes, setSucess] = useState(false);

  const changeBankDetails = (e) => {
    e.preventDefault();

    const newDetails = { bankName: bankName, accName: accName, accNo: accNo };
    if (bankName !== "" && accName !== "" && accNo !== "") {
      props.updateBankDetails(newDetails);
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 2000);
    } else if (bankName === "" || accName === "" || accNo === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <article className="lg:py-14 py-6 lg:px-12 px-4 bg-white">
      <h1 className="text-2xl text-primary font-semibold mb-8">Account</h1>
      <h6 className="text-base font-medium mb-4">Bank Details</h6>

      <form
        className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:gap-x-16 gap-x-8 lg:gap-y-8 gap-y-6"
        onSubmit={(e) => changeBankDetails(e)}
      >
        <SettingInputs
          label={"Bank Name"}
          value={bankName}
          inputEvent={(e) => setBankName(e.target.value)}
        />
        <SettingInputs
          label={"Account Name"}
          value={accName}
          inputEvent={(e) => setAccName(e.target.value)}
        />
        <SettingInputs
          label={"Account No"}
          value={accNo}
          inputEvent={(e) => setAccNo(e.target.value)}
        />

        <button
          type="submit"
          className="w-3/4 inline-block py-2 px-7 text-sm font-medium italic text-white rounded-md bg-primary outline-none transition ease-in-out duration-500"
        >
          Update
        </button>
      </form>

      {error && <FeedBackModal error={error} />}
      {succes && <FeedBackModal error={error} />}
    </article>
  );
}
