import React from "react";
import { GoBellFill } from "react-icons/go";
import avatar from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";

export default function MainDashboard(props) {
  return (
    <section>
      <div className="flex flex-row justify-end items-center gap-3">
        <Link
          to={"/dashboard"}
          className="p-2 rounded-lg bg-white shadow-sm relative"
        >
          <GoBellFill className="text-xl" />
          <span class="absolute top-2 right-3 flex h-1.5 w-1.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-warning"></span>
          </span>
        </Link>
        <div
          className="bg-white p-0.5 w-fit h-fit rounded-full cursor-pointer"
          onClick={() => props.activeTab("Profile")}
        >
          <img
            src={avatar}
            alt="avatar img"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      <section className="flex gap-12 mt-10">
        <article className="grow">
          <div className="bg-primary text-white p-5 rounded-xl">
            <h3 className="text-2xl text-tableRow mb-8 font-semibold">
              Wallet
            </h3>
            <p className="text-base font-medium text-tableRow">
              Available Amount
            </p>
            <div>
            <h1 className="text-3xl font-semibold mb-8">N 0.00</h1>
<RiEyeCloseLine />
<RiEyeLine />
            </div>
            <div>
              <Link to={"/dashboard"}>Fund Wallet</Link>
              <Link to={"/dashboard"}>Withdraw Cash</Link>
            </div>
          </div>
        </article>

        <aside className="flex-none">
          <div className="bg-secondary p-4 rounded-lg">
            <p>Refer a friend and earn up to $1,000 airtime!</p>
          </div>
        </aside>
      </section>
    </section>
  );
}
