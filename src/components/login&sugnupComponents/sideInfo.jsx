import React from "react";
import { Link } from "react-router-dom";
import FormButtons from "./formButtons";

export default function SideInfo({sideText, sideActionText, sideStep, sideButton, sideLink}) {
  return (
    <article className="xl:basis-7/12 basis-3/4 text-center lg:block hidden">
      <h2 className="text-2xl font-bold mb-6">
        {sideText} <span className="text-primary">{sideActionText}</span>
      </h2>
      <p className="text-sm font-medium mb-12">
        {sideStep}
      </p>
      <Link to={sideLink}>
        <FormButtons
          type={"info"}
          text={sideButton}
          font={"font-medium text-lg"}
          buttonType={"button"}
        />
      </Link>
    </article>
  );
}
