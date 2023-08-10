import Link from "next/link";

const blogs = [
  {
    id: "dy",
    title: "my first blog",
    number: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.",
  },
  {
    id: "dz",
    title: "my second blog",
    number: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.",
  },
  {
    id: "da",
    title: "my third blog",
    number: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.",
  },
  {
    id: "db",
    title: "my fourth blog",
    number: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.",
  },
  {
    id: "dc",
    title: "my fifth blog",
    number: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.",
  },
];

const dy_blogpage = ({ params }) => {
  const [id, num] = params.segments || [];

  return (
    <div className="flex container mx-auto">
      {blogs.map(({ id, title, number, description }) => (
        <Link className="mr-5 text-red-400 " key={id} href={`/${id}/${number}`}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default dy_blogpage;
