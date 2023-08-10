import Link from "next/link";
import HomeLink from "../Components/HomeLink";

const dashboard_page = () => {
  return (
    <div>
      <HomeLink></HomeLink>

      <h1 className="mt-10 text-3xl text-blue-500 font-extrabold text-center">
        dashboard Page
      </h1>
    </div>
  );
};

export default dashboard_page;
