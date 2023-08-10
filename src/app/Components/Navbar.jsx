import Link from "next/link";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 4,
    title: "Blogs",
    path: "/blogs",
  },
  {
    id: 5,
    title: "Documentation",
    path: "/docs",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-around container mx-auto  ">
      {navLinks.map(({ id, path, title }) => (
        <Link
          className="ms-5 font-bold text-white hover:text-red-500 hover:underline"
          key={id}
          href={path}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
