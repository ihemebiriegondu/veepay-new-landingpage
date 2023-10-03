import React from "react";
import { BiSolidCamera } from "react-icons/bi";
import SettingInputs from "./settingInputs";

export default function UserInfoSetting(props) {
  const getImageUrl = (e) => {
    const imgInput = e.target;
    const inputTarget = imgInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(inputTarget);
    reader.onloadend = () => {
      props.updateImg(reader.result);
    };
  };

  return (
    <article className="py-14 px-12 bg-white">
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

      <form className="mt-5">
        <SettingInputs />
      </form>
    </article>
  );
}
