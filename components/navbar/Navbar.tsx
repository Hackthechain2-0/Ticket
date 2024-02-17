import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <img src="/ticket.png" alt="Ticket Logo" className="h-8 w-8 mr-1" />
        <span className="text-[2rem] text-gray-800 font-bold tracking-tighter">Ticket.</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Events
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
