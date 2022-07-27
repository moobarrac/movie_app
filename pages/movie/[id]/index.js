import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useState, useEffect } from 'react';
import { server } from '../../../config';

const index = () => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  let path = router.asPath
  let id = path.slice(7)

  const loadData = async () => {
    setLoading(true)
    const response = await axios(`${server}/${id}?api_key=8c0a105c23c82cdb946e4909ea6c5007&language=en-US&page=1`)
    const data = response.data;
    setMovie(data)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, []);
  return (
    <div className='bg-black min-h-screen'>
    <div className='container max-w-4xl mx-auto pt-6'>
      <div className='px-3'>
        <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={1000} height={600} className='rounded-md' />
        <h1 className="font-bold text-red text-xl my-2">{movie.title}</h1>
        <p className='text-gray text-sm mt-4'>{movie.overview}</p>
        {/* <p className='mt-5 text-gray text-sm'>
          Genres: <span className='font-bold'>
            {movie.genres.map(genre => genre.name).join(", ")}
          </span>
        </p> */}
        <p className='text-gray text-sm'>Release Date: <span className='font-bold text-red'>{movie.release_date}</span></p>
      </div>
      <div className='flex center justify-center'>
      <Link href='/'>
        <button className='bg-red text-black text-2xl font-bold px-4 py-2 rounded'>Go back</button>
      </Link>
      </div>
    </div>
    </div>
  )
}

export default index

// export async function getStaticProps(context) {
//   const id = context.params.id
//   const response = await axios(`${server}/${id}?api_key=8c0a105c23c82cdb946e4909ea6c5007&language=en-US`)
//   const movie = response.data

//   return {
//     props: { movie }
//   }
// }

// export async function getStaticPaths() {
//   const response = await axios(`${server}/upcoming?api_key=8c0a105c23c82cdb946e4909ea6c5007&language=en-US`)
//   const movies = response.data.results
//   console.log(movies);

//   const ids = movies.map(movie => movie.id)
//   const paths = ids.map(id => ({params: {id: id.toString()}}))
  
//   return {
//     paths,
//     fallback: false
//   }
// }