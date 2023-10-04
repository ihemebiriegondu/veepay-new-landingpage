import React, { useState } from "react";
import { BiSolidCamera } from "react-icons/bi";
import SettingInputs from "./settingInputs";

export default function UserInfoSetting(props) {
  const [fname, setFname] = useState("Peter");
  const [lname, setLname] = useState("Oyetunji");
  const [email, setEmail] = useState("peteroyetunjiayobami@gmail.com");
  const [number, setNumber] = useState("08140645032");
  const [password, setPassword] = useState("08140645032");

  const getImageUrl = (e) => {
    const imgInput = e.target;
    const inputTarget = imgInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(inputTarget);
    reader.onloadend = () => {
      props.updateImg(reader.result);
    };
  };

  const changeUserInfo = (e) => {
    e.preventDefault();

    //console.log(fname, lname, email, number, password)
  };

  return (
    <article className="lg:py-14 py-6 lg:px-12 px-4 bg-white">
      <h1 className="text-2xl text-primary font-semibold mb-5">User Info</h1>

      <input
        type="file"
        name="imgInput"
        id="imgInput"
        accept="image/gif, image/jpeg, image/png"
        className="hidden"
        onChange={(e) => {
          getImageUrl(e);
        }}
      />

      <label
        htmlFor={"imgInput"}
        className="relative w-fit inline-block cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden bg-light">
          <img
            src={props.displayPic}
            alt="display pic"
            className="w-full h-full object-contain"
          />
        </div>
        <BiSolidCamera className="text-camYellow text-xl absolute top-0 right-0" />
      </label>

      <form
        className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:gap-x-16 gap-x-8 lg:gap-y-8 gap-y-6"
        onSubmit={(e) => {
          changeUserInfo(e);
        }}
      >
        <SettingInputs
          label={"First Name"}
          value={fname}
          inputEvent={(e) => {
            setFname(e.target.value);
          }}
        />
        <SettingInputs
          label={"Last Name"}
          value={lname}
          inputEvent={(e) => {
            setLname(e.target.value);
          }}
        />
        <SettingInputs
          label={"Email adress"}
          value={email}
          inputEvent={(e) => {
            setEmail(e.target.value);
          }}
        />
        <SettingInputs
          label={"Phone No."}
          value={number}
          inputEvent={(e) => {
            setNumber(e.target.value);
          }}
        />
        <SettingInputs
          label={"Password"}
          value={password}
          inputEvent={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-3/4 inline-block py-2 px-7 text-sm font-medium italic text-white rounded-md bg-primary outline-none transition ease-in-out duration-500"
        >
          Update
        </button>
      </form>
    </article>
  );
}
