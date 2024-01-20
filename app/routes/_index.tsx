import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-2xl font-semibold">
      <h1>Remix Movies</h1>

      <Link to={"/movies"} className="text-sm text-[#0000ff]">
        /movies
      </Link>
    </div>
  );
}
