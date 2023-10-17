import React, { useState } from "react";
import SettingInputs from "./settingInputs";
import FeedBackModal from "./feedBackModal";
import masterCardLogo from "../../../assets/icons/MasterCard.png";
import cardBg from "../../../assets/images/01.png";

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

      <div className="pt-16">
        <h6 className="text-base font-medium mb-4">Cards</h6>

        <div className="grid grid-cols-3">
          <div>
            <p className="text-right text-sm text-gray-500 pe-3">Remove</p>
            <div className="pb-3 pt-20 px-5 rounded-xl relative">
              <div className="relative z-30">
                <p className="mb-8 text-2xl font-semibold">
                  8763 2736 9873 0329
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs">Card Holder Name</p>
                    <p className="text-sm font-semibold">HILLERY NEVELIN</p>
                  </div>
                  <div>
                    <p className="text-xs">Expired Date</p>
                    <p className="text-sm font-semibold">10/28</p>
                  </div>
                  <div className="w-12 h-7">
                    <img
                      src={masterCardLogo}
                      alt="master card logo"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 bottom-0 w-full left-0 z-20">
                <img
                  src={cardBg}
                  alt="card background"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-6 inline-block py-2 px-7 text-sm font-medium italic text-white rounded-md bg-primary outline-none transition ease-in-out duration-500"
          onClick={() => props.setShowAddCard(true)}
        >
          Add new card
        </button>
      </div>

      {error && <FeedBackModal error={error} />}
      {succes && <FeedBackModal error={error} />}
    </article>
  );
}
