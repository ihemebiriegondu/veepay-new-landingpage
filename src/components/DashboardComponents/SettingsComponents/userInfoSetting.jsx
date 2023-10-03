import React from "react";
import { BiSolidCamera } from "react-icons/bi";

export default function UserInfoSetting({ displayPic }) {
  return (
    <article className="py-14 px-12 bg-white">
      <h1 className="text-2xl text-primary font-semibold mb-5">User Info</h1>
      <div className="relative w-fit">
        <div className="w-16 h-16">
          <img
            src={displayPic}
            alt="display pic"
            className="w-full h-full object-contain"
          />
        </div>
        <BiSolidCamera className="text-camYellow text-xl absolute top-0 right-0" />
      </div>

      <form>
        <div>
            
        </div>
      </form>
    </article>
  );
}
