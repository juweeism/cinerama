import { useEffect, useState } from "react"

type MovieDetailsProps = {
    title: string
    poster_path: string
    tagline: string
    overview: string
}


const MovieDetails = (props: { movieData: MovieDetailsProps }) => {
    const { movieData } = props

    const [isCopied, setIsCopied] = useState<boolean>(false)

    // MOVIE POSTER 
    const MOVIE_BASE_URL = "https://image.tmdb.org/t/p"
    const MOVIE_POSTER_SIZE = "w500"
    const MOVIE_POSTER_URL = `${MOVIE_BASE_URL}/${MOVIE_POSTER_SIZE}${movieData.poster_path}`

    // GOOGLE CALENDAR LINK
    // param reference https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md
    const CALENDAR_BASE_URL = "https://calendar.google.com/calendar/u/0/r/eventedit?"
    const url = new URL(CALENDAR_BASE_URL)

    url.searchParams.append("text", movieData.title)
    url.searchParams.append("details", `🍿 "${movieData.title.toUpperCase()}" is finally here! This calendar event is made by Cine Street https://cinestreet.juw.ee`)

    const CALENDAR_LINK = url.toString()

    const clickCopyToClipboard = () => {
        try {
            navigator.clipboard.writeText(CALENDAR_LINK)
            setIsCopied(true)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="max-w-[450px] border  mx-auto my-3 text-zinc-400 border-zinc-600 p-3 flex flex-col gap-3">
            <div className="flex justify-center mx-auto">
                <img src={MOVIE_POSTER_URL} alt="movie poster" />
            </div>
            <div className="flex flex-col justify-center border border-zinc-600 p-3">
                <h1 className="uppercase text-3xl font-bold">{movieData.title}</h1>
                {movieData.tagline && (<h3 className="text-xl text-center mx-auto font-[Imbue] ">"{movieData.tagline}"</h3>)}
            </div>
            <div className="border border-zinc-600">
                <div className="flex">
                    <div className="overflow-hidden border-r border-zinc-600 outline-zinc-600 p-1 px-3 text-zinc-500">
                        <span className="truncate">{CALENDAR_LINK}</span>
                    </div>
                    <button className="p-1 h-full" onClick={clickCopyToClipboard}>{isCopied ? "COPIED" : "COPY"}</button>
                </div>
                <div>
                    <a href={CALENDAR_LINK} className="bg-pink-700 text-md md:text-lg w-full block uppercase text-black">☞ add to calendar ☜</a>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
