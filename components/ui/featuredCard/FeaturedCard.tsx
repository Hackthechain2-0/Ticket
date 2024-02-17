import { Button, Input } from "@mui/joy";
import Link from "next/link";

const FeaturedCard = () => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="grid w-full grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              alt="Event thumbnail"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              src="/concert.jpg"
              width="600"
            />
          </div>
          <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
            <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm border-2 border-zinc-900">
              Music & Dance
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Spring Fest 2024
            </h2>
            <h3 className="mt-4 text-xl font-semibold tracking-tighter sm:text-3xl md:text-4xl lg:text-4xl">
              April 15-17, 2024
            </h3>
            <p className="mt-4 text-gray-700 dark:text-gray-700">
              Location: Mini Open Air Theatre, IIIT Kota
            </p>
            <Button
              color="neutral"
              className="mt-4 px-8 py-2 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900 focus:bg-zinc-900 text-white"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
