import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { MOVIE, OPTIONS, POSTER } from "~/api";

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  const res = await fetch(MOVIE(id), OPTIONS);
  const movie = await res.json();

  return { movie };
}

export default function Movie() {
  const { movie } = useLoaderData<typeof loader>();

  return (
    <div className="text-2xl font-semibold flex items-start gap-4 p-4">
      <div className="w-72 h-44">
        <img
          src={POSTER(movie.poster_path)}
          alt={movie.title}
          className="w-full"
        />
      </div>

      <div>
        <h1 className="font-bold pb-4 text-4xl">{movie.title}</h1>
        <h1 className="font-semibold pb-2 text-xl text-neutral-800">
          {movie.tagline}
        </h1>
        <p className="text-base max-w-prose text-neutral-500">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
