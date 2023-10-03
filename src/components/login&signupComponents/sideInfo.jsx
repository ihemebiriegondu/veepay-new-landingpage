import React from "react";
import { Link } from "react-router-dom";
import FormButtons from "./formButtons";

export default function SideInfo({
  sideText,
  sideActionText,
  sideStep,
  sideButton,
  sideLink,
  page,
}) {
  return (
    <div className="xl:basis-7/12 basis-3/4 lg:block hidden">
      <article className="text-center relative z-20">
        <h2 className="text-2xl font-bold mb-6">
          {sideText} <span className="text-primary">{sideActionText}</span>
        </h2>
        <p className="text-sm font-medium mb-12">{sideStep}</p>
        <Link to={sideLink}>
          <FormButtons
            type={"info"}
            text={sideButton}
            font={"font-medium text-lg"}
            buttonType={"button"}
          />
        </Link>
      </article>
      {page === "login" ? (
        <div className="bg-formBg fixed top-0 bottom-0 2xl:-left-28 xl:-left-24 -left-28 xl:w-5/12 lg:w-1/2 w-5/12 z-10 -skew-x-8 lg:block hidden"></div>
      ) : (
        <div className="bg-formBg fixed top-0 bottom-0 2xl:-right-28 xl:-right-24 -right-28 xl:w-5/12 lg:w-1/2 w-5/12 z-10 skew-x-8 lg:block hidden"></div>
      )}
    </div>
  );
}
