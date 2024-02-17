import Link from "next/link";

const Navbar = () => {
    return (
      <header className="px-4 lg:px-6 h-14 flex items-center">
      <div className="w-full max-w-[400px] space-y-2">
        <form className="flex space-x-2">
          <input className="flex-1" placeholder="Search for festivals" type="search" />
          <button type="submit">Search</button>
        </form>
      </div>
        <Link className="flex items-center justify-center" href="#">
          <div className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/events">
            Events
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
            Login
          </Link>
        </nav>
      </header>
    )
}

export default Navbar;