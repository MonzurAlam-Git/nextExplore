import Link from "next/link";
import React from "react";
const dashLinks = [
  {
    id: 1,
    title: "admin",
    url: "/admin",
  },
  {
    id: 2,
    title: "user",
    url: "/user",
  },
  {
    id: 3,
    title: "cart",
    url: "/cart",
  },
];

const db_layout = ({ children }) => {
  return (
    <aside className="grid">
      {dashLinks.map(({ id, url, title }) => (
        <Link
          className="ms-5 mt-3 font-bold"
          key={id}
          href={`/dashboard/${url}`}
        >
          {title}
        </Link>
      ))}
      {children}
    </aside>
  );
};

export default db_layout;
