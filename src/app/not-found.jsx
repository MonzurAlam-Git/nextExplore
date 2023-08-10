/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeLink from "./Components/HomeLink";

const NotFound = () => {
  return (
    <div>
      <HomeLink></HomeLink>

      <img src="https://i.ibb.co/nwdrb6n/2153483.jpg" alt="error" />
    </div>
  );
};

export default NotFound;
