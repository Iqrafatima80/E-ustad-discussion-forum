import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGauge } from '@fortawesome/free-solid-svg-icons'
import React from "react";

const Header = () => {
  return (
    <div className="border h-12 p-2">
      Header
      <FontAwesomeIcon icon={faGauge} color="white"/>
    </div>
  );
};

export default Header;
