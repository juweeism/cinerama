import { useEffect, useState } from "react";

const UpcomingMovies = (props) => {
    if (!props) return <p>No movies found.</p>

    const { results: movies } = props.movies

    return (
        <div className="movie-board border-[1rem] md:border-[1.5rem]">
            <ul className="bg-[#999999] text-black">
                {movies.map(m => <li className="uppercase font-bold border-y-[3px] mt-[-1px] border-black text-xl [text-shadow:_3px_3px_3rem_#ffffff] md:text-3xl"><a href={`/m/${m.id}`} > {m.title}</a></li>)
                }
            </ul>
        </div >
    )
}

export default UpcomingMovies
