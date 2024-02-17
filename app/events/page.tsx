
import Card from "@/components/ui/card/Card"
import CardContent from "@/components/ui/cardcontent/CardContent"
import CardFooter from "@/components/ui/cardfooter/CardFooter"
import CardHeader from "@/components/ui/cardheader/CardHeader"
import Link from "next/link"
const EventPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Book tickets for exciting college events and festivals. Secure your spot now!
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid lg:grid-cols-2 lg:gap-12 xl:grid-cols-3 xl:gap-16">
            <Card className="flex flex-col gap-4 p-0">
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  alt="Thumbnail"
                  className="object-cover object-center"
                  height="337"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/337",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <CardHeader className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Music Fest</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date: August 20, 2023</p>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <p className="text-sm">
                    Experience the best music festival of the year. Amazing performances, great food, and memories to
                    last a lifetime.
                  </p>
                  <p className="text-sm">
                    <strong>Venue:</strong>
                    Central Park Amphitheater{"\n                                  "}
                  </p>
                  <p className="text-sm">
                    <strong>Time:</strong>
                    4:00 PM - 10:00 PM{"\n                                  "}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold">Ticket Options</h4>
                  <ul className="grid gap-2">
                    <li className="grid gap-1 items-start">
                      <span className="text-sm">General Admission</span>
                      <span className="text-sm font-bold">$25.00</span>
                    </li>
                    <li className="grid gap-1 items-start">
                      <span className="text-sm">VIP Experience</span>
                      <span className="text-sm font-bold">$75.00</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Details
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col gap-4 p-0">
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  alt="Thumbnail"
                  className="object-cover object-center"
                  height="337"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/337",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <CardHeader className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Music Fest</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date: August 20, 2023</p>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <p className="text-sm">
                    Experience the best music festival of the year. Amazing performances, great food, and memories to
                    last a lifetime.
                  </p>
                  <p className="text-sm">
                    <strong>Venue:</strong>
                    Central Park Amphitheater{"\n                                  "}
                  </p>
                  <p className="text-sm">
                    <strong>Time:</strong>
                    4:00 PM - 10:00 PM{"\n                                  "}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold">Ticket Options</h4>
                  <ul className="grid gap-2">
                    <li className="grid gap-1 items-start">
                      <span className="text-sm">General Admission</span>
                      <span className="text-sm font-bold">$25.00</span>
                    </li>
                    <li className="grid gap-1 items-start">
                      <span className="text-sm">VIP Experience</span>
                      <span className="text-sm font-bold">$75.00</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Book Now
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col gap-4 p-0">
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  alt="Thumbnail"
                  className="object-cover object-center"
                  height="337"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/337",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <CardHeader className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Music Fest</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date: August 20, 2023</p>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <p className="text-sm">
                    Experience the best music festival of the year. Amazing performances, great food, and memories to
                    last a lifetime.
                  </p>
                  <p className="text-sm">
                    <strong>Venue:</strong>
                    Central Park Amphitheater{"\n                                  "}
                  </p>
                  <p className="text-sm">
                    <strong>Time:</strong>
                    4:00 PM - 10:00 PM{"\n                                  "}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold">Ticket Options</h4>
                  <ul className="grid gap-2">
                    <li className="grid gap-1 items-start">
                      <span className="text-sm">General Admission</span>
                      <span className="text-sm font-bold">$25.00</span>
                    </li>
                    <li className="grid gap-1 items-start">
                      <span className="text-sm">VIP Experience</span>
                      <span className="text-sm font-bold">$75.00</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Book Now
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default EventPage



function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
