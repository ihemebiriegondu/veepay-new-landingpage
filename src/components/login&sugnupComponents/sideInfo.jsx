import React from "react";
import { Link } from "react-router-dom";
import FormButtons from "./formButtons";

export default function SideInfo() {
  return (
    <article className="xl:basis-7/12 basis-3/4 text-center lg:block hidden">
      <h2 className="text-2xl font-bold mb-6">
        Don’t have an Account? <span className="text-primary">Sign Up</span>
      </h2>
      <p className="text-sm font-medium mb-12">
        Fill up some informations and start journey with us.
      </p>
      <Link to={"/signUp"}>
        <FormButtons
          type={"info"}
          text={"Sign up"}
          font={"font-medium text-lg"}
          buttonType={"button"}
        />
      </Link>
    </article>
  );
}
