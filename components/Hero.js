import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src={"/home_cinema.png"} width={200} height={200} layout="responsive" />
      </div>
      <h1 className="text-2xl text-darkgray uppercase font-bold">Welcome to WatchME</h1>
      <p className="text-gray">Catch films before everyone, ENJOY</p>
      <Link href="/contact">
        <button className="bg-black text-red text-darkgray py-3 px-6 rounded text-sm mt-4">Contact US</button>
      </Link>
    </div>
  )
}

export default Hero