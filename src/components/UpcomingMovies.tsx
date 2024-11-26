type Movie = {
    id: string
    title: string
}

type Movies = {
    results: Movie[]
}

const UpcomingMovies = (props: { movies: Movies } | null) => {
    if (!props) return <p>No movies found.</p>

    const { results: movies } = props.movies
    console.log(movies)

    if (!movies?.length) return <p>No movies found.</p>

    return (
        <div className="movie-board border-[1rem] md:border-[1.5rem]">
            <ul className="bg-[#999999] text-black">
                {movies.map((m: Movie) => <li className="uppercase font-bold border-y-[3px] mt-[-1px] border-black text-xl [text-shadow:_3px_3px_3rem_#ffffff] md:text-3xl"><a href={`/m/${m.id}`} > {m.title}</a></li>)
                }
            </ul>
        </div >
    )
}

export default UpcomingMovies
