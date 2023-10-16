import React, { useState } from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";

export default function SendTypeCheckboxes(props) {
  const sendOptions = ["Immediately", "Schedule"];
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <div className="flex lg:gap-x-3 md:gap-x-2 gap-x-1 lg:pt-4 md:pt-1 pt-0">
      <p className="lg:text-2xl md:text-lg text-sm font-semibold mont">Send:</p>
      <div className="lg:text-xl md:text-base text-sm font-medium mont flex flex-col lg:gap-y-4 md:gap-y-3 gap-y-1">
        {sendOptions.map((option, i) => (
          <div
            key={option}
            className="flex items-center lg:gap-x-4 md:gap-x-2 gap-x-1"
          >
            <input
              type="radio"
              name="sendType"
              id={option}
              value={option}
              className="peer hidden"
              onClick={(e) => {
                props.setSendType(e.target.id);
                option === "Schedule" && setShowBackdrop(true);
              }}
            />

            <label htmlFor={option} className="peer-checked:text-black text-white flex items-center lg:gap-x-4 md:gap-x-2 gap-x-1">
              <div className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-2.5 h-2.5 lg:text-base md:text-sm text-xs border border-black/40 flex flex-col justify-center">
                <IoCheckmark className="mx-auto w-full inline-block" />
              </div>
              <span className="text-black">{option}</span>
            </label>
            {showBackdrop && option === "Schedule" && (
              <div className="peer-checked:flex hidden fixed bg-black/50 top-0 bottom-0 left-0 z-50 w-full flex-col justify-center lg:px-60 md:px-40 sm:px-20 xs:px-10 px-5 lg:text-2xl md:text-lg text-base">
                {props.scheduleTime !== "" && (
                  <div className="w-full flex justify-end mb-4 text-white">
                    <IoClose
                      className=""
                      onClick={() => setShowBackdrop(false)}
                    />
                  </div>
                )}
                <input
                  type="datetime-local"
                  name="dateTime"
                  id="dateTime"
                  value={props.scheduleTime}
                  className="outline-none lg:border-4 md:border-3 border-2 border-servicesInputFocused lg:rounded-xl md:rounded-lg rounded-md lg:px-10 md:px-6 px-2 lg:py-5 md:py-3.5 py-2"
                  onChange={(e) => {
                    props.setScheduleTime(e.target.value);
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
