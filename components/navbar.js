import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="text-white p-4 max-w-7xl mx-auto container font-bold tracking-widest">
        <Link  href="/">
          <a className="text-base md:text-2xl font-neue">
            Watch
            <span className="text-red">
              ME
            </span>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar