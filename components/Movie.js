import Image from "next/image"
import Link from "next/link"

const Movie = ({movie}) => {
  return (
    <Link href={`/movie/${movie.id}`} >
      <div className="bg-red shadow-sm rounded-md cursor-pointer mb-4">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={700} height={800} className="rounded-t-md" />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-black text-base mb-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  )
}

export default Movie