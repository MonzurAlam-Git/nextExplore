import Link from "next/link";
import React from "react";

const HomeLink = () => {
  return (
    <button className="btn btn-primary">
      <Link href={`/`}>Home</Link>
    </button>
  );
};

export default HomeLink;
