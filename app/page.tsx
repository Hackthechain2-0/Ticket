
import Link from "next/link"

export default function Home() {
  return (
    <main className="pt-16 md:pt-20">
    <section className="w-full ">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Events</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Browse through the exciting lineup of upcoming college fests.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              alt="Event thumbnail"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="225"
              src="/placeholder.svg"
              width="400"
            />
          </div>
          <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Spring Fest 2024
            </h3>
            <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Music & Dance
            </p>
            <p className="mt-4 text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              April 15-17, 2024
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Virtual Event</p>
            <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The most anticipated college fest of the year! Join us for three days of music, dance, and fun.
              Amazing performances by top artists, exciting competitions, and more!
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View Details
            </Link>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              alt="Event thumbnail"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="225"
              src="/placeholder.svg"
              width="400"
            />
          </div>
          <div className="mx-auto flex flex-col w-full items-center justify-center p-4 sm:p-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Summer Vibes 2024
            </h3>
            <p className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Music Festival
            </p>
            <p className="mt-4 text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">June 10-12, 2024</p>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Location: Central Park Amphitheater</p>
            <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get ready to groove to the beats of summer! Our music festival brings together the hottest bands and
              the coolest crowd. Enjoy the ultimate summer vibes!
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}

