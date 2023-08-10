import Link from "next/link";

const dy_blogpage = ({ params }) => {
  const [year, id] = params.segments || [];

  return (
    <div className="flex container mx-auto">
      <h1 className="text-xl text-cyan-300">
        Info from{" "}
        <span className="text-red-500 font-extrabold">
          User ID : {id} From the Year: {year}
        </span>
        has rendered
      </h1>
    </div>
  );
};

export default dy_blogpage;
