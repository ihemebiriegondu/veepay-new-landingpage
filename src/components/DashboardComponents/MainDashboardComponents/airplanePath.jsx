import React from "react";

export default function AirplanePath() {
  return (
    <div className="absolute top-10 right-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        height="200"
        width="400"
      >
        <defs>
          <path id="basePath" d="M 50,150 A 280 500 0 0 1 350,150" />
          <mask id="mask">
            <use
              xlinkHref="#basePath"
              strokeWidth="0.530393"
              stroke="white"
              strokeDasharray="2.12 2.12"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0,348.5"
                to="348.5,0"
                begin="0s"
                dur="5s"
                fill="freeze"
                repeatCount="indefinite"
              />
            </use>
          </mask>
        </defs>
        <use
          xlinkHref="#basePath"
          strokeWidth="2"
          strokeDasharray="10"
          stroke="grey"
          fill="none"
          mask="url(#mask)"
        />
        <path
          d="M 27,3 H 21 L 13,15 H 9 L 12,3 H 5 L 3,7 H -1 L 1,0 -1,-7 H 3 L 5,-3 H 12 L 9,-15 H 13 L 21,-3 H 27 C 33,-3 33,3 27,3 Z"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
        >
          <animateMotion rotate="auto" begin="0s" dur="5s" fill="freeze" repeatCount="indefinite">
            <mpath xlinkHref="#basePath" />
          </animateMotion>
        </path>
      </svg>
    </div>
  );
}
