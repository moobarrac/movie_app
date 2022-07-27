import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";
import { server } from "../config";
import  ReactPaginate from "react-paginate";

export default function Home() {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const loadData = async page => {
    setLoading(true)
    const response = await axios(`${server}/upcoming?api_key=8c0a105c23c82cdb946e4909ea6c5007&language=en-US&page=${page}`)
    const data = response.data;
    setMovies(data.results)
    setLoading(false)
  }

  const handlePageClick = ({selected}) => {
    let zeroBase = selected + 1
    setLoading(true)
    setCurrentPage(zeroBase)
    loadData(zeroBase)
    setLoading(false)
  }
  
  useEffect(() => {
    loadData(1)
  }, [])

  return (
      <div className="bg-black">
        <Hero />
        <PopularMovies movies={movies} />
        <div>
          <ReactPaginate
            previousLabel="<<"
            nextLabel=">>"
            pageCount={21}
            onPageChange={handlePageClick}
            className="flex justify-center text-white gap-1  pb-5 text-2xl"
            activeClassName="bg-red"
            forcePage={currentPage - 1}
            pageClassName='p-1 rounded border-solid border-gray border-2'
          />
        </div>
    </div>
  )
}

// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
