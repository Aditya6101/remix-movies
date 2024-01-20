import { Link, useLoaderData } from "@remix-run/react";
import { MOVIES, OPTIONS, POSTER } from "~/api";

export async function loader() {
  const res = await fetch(MOVIES, OPTIONS);
  const data = await res.json();

  return { movies: data.results };
}

export default function Movies() {
  const { movies } = useLoaderData<typeof loader>();

  return (
    <div className="text-2xl font-semibold">
      <h1>Remix Movies</h1>

      <ul className="py-4 list-inside list-disc">
        {movies.map((movie) => {
          function fetchImage() {
            const image = new Image();
            image.src = POSTER(movie.poster_path);
          }

          return (
            <li key={movie.id} className="text-base">
              <Link
                prefetch="intent"
                to={`/movies/${movie.id}`}
                className="-ml-2 underline"
                onMouseEnter={() => fetchImage()}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
