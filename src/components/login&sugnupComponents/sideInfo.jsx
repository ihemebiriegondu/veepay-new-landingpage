import React from "react";
import { useNavigate } from "react-router-dom";
import FormButtons from "./formButtons";

export default function SideInfo() {
  const navigate = useNavigate();
  const navFunction = () => {
    navigate("/signUp");
  };

  return (
    <article className="basis-7/12 text-center lg:block hidden">
      <h2 className="text-2xl font-bold mb-6">
        Don’t have an Account? <span className="text-primary">Sign Up</span>
      </h2>
      <p className="text-sm font-medium mb-12">
        Fill up some informations and start journey with us.
      </p>
      <FormButtons
        type={"info"}
        text={"Sign up"}
        font={"font-medium text-lg"}
        formButtonEvent={navFunction}
      />
    </article>
  );
}
