import Movie from "./Movie"

const PopularMovies = ({movies}) => {

  return (
    <div className=" container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-gray uppercase text-2xl mb-5 mt-8">What's Coming</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map(movie =>
          <Movie movie={movie} key={movie.id} />
        )}
      </div>
      
    </div>
  )
}

export default PopularMovies