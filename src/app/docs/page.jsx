import Link from "next/link";
import React from "react";
import HomeLink from "../Components/HomeLink";

const documentation_page = () => {
  return (
    <div>
      <HomeLink></HomeLink>
      <h1 className="mt-10 text-3xl text-green-500 font-extrabold text-center">
        Documentation Page
      </h1>
    </div>
  );
};

export default documentation_page;
