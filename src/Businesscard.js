import React from "react";
import "./Businesscard.css";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";

const Businesscard = () => {
  return (
    <div className="business-card">
      <div className="top-section">
        <h1>Asad Khan</h1>
        <h3>Web Developer</h3>
      </div>
      <div className="bottom-grid">
        <div>
          <PhoneIcon height={15} width={15} />
          +92 313-2820143
        </div>
        <div>
          <MapPinIcon height={15} width={15} />
          Peshawar, Pakistan
        </div>
        <div>
          <GlobeAltIcon height={15} width={15} />
          github.com/dumb-programmer
        </div>
        <div>
          <EnvelopeIcon height={15} width={15} />
          asadkhan6192@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Businesscard;
