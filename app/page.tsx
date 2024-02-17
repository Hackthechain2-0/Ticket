import Link from "next/link";
import { Button, Input } from "@mui/joy";
import FeaturedCard from "@/components/ui/featuredCard/FeaturedCard";

export default function Home() {
  return (
    <main className="w-full flex justify-center pt-16 md:pt-20">
      <div className="w-full flex flex-col items-center py-6 space-y-6 md:space-y-10">
        <div className="space-y-2 text-center flex flex-col items-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Upcoming Fests
          </h1>
          <p className="text-gray-700 dark:text-gray-700 w-2/3">
            The ultimate destination for college festivals. Discover and book
            your tickets now!
          </p>
        </div>
        <div className="w-full space-y-2 max-w-[400px]">
          <form className="flex space-x-2">
            <Input
              className="flex-1 hover:border-zinc-800 active:border-zinc-800 focus:border-zinc-800"
              placeholder="Search for festivals"
              type="search"
            />
            <Button
              color="neutral"
              className="bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900 focus:bg-zinc-900 text-white"
            >
              Search
            </Button>
          </form>
        </div>

        {/* Featured event section */}
        <FeaturedCard/>
      </div>
    </main>
  );
}
