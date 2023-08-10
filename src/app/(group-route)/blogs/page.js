import Link from "next/link";

const blogs = [
  {
    id: "1",
    title: "blog-1",
    year: 2020,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit",
  },
  {
    id: "2",
    title: "blog-2",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit",
  },
  {
    id: "3",
    title: "blog-3",
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit",
  },
  {
    id: "4",
    title: "blog-4",
    year: 2023,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit",
  },
  {
    id: "5",
    title: "blog-5",
    year: 2018,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem.Lorem ipsum dolor sit",
  },
];

const blogs_page = () => {
  return (
    <div>
      {blogs.map(({ id, title, year, description }) => (
        <Link
          className="mr-5 text-red-400 block"
          key={id}
          href={`blogs/${year}/${id}`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default blogs_page;
