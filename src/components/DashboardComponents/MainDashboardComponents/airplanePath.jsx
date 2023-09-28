import React from "react";

export default function AirplanePath() {
  return (
    <div className="absolute top-20 right-12 overflow-visible">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        height="90"
        width="90"
        viewBox="0 0 90 90"
        className="overflow-visible"
      >
        <defs>
          <path
            id="basePath"
            d="M0 50 C15.8963 34.6578 18.8356 29.6132 21.1823 25.9779C25.7609 18.8855 24.2184 9.51981 20.4612 4.44739C17.4042 0.320303 8.88546 -1.4453 3.2852 5.31948C-0.949195 10.4344 -0.134029 23.349 10.019 23.9142C25.7048 24.7874 35.658 8.66293 40.1624 4.13838"
          />
          <mask id="mask">
            <use
              xlinkHref="#basePath"
              strokeWidth="0.53"
              stroke="white"
              strokeDasharray="2.12"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0,148.5"
                to="148.5,0"
                begin="0s"
                dur="2s"
                fill="freeze"
              />
            </use>
          </mask>
        </defs>
        <use
          xlinkHref="#basePath"
          strokeWidth="0.53"
          strokeDasharray="2.12"
          stroke="#03243D"
          fill="none"
          mask="url(#mask)"
        />
        <path
          d="M 9,1 H 7 L 4.3,5 H 3 L 4,1 H 1.6 L 1,2.3 H -0.3 L 0.3,0 -0.3,-2.3 H 1 L 1.6,-1 H 4 L 3,-5 H 4.3 L 7,-1 H 9 C 11,-1 11,1 9,1 Z"
          fill="#03243D"
          stroke="#FFA500"
          strokeWidth="0.2"
        >
          <animateMotion
            rotate="auto"
            begin="0s"
            dur="2s"
            fill="freeze"
          >
            <mpath xlinkHref="#basePath" />
          </animateMotion>
        </path>
      </svg>
    </div>
  );
}
