
import Link from "next/link"
const Register = () => {
  return (
    <div className="w-full space-y-4">
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <label htmlFor="college">College</label>
            <input id="college" placeholder="MIT" required />
          </div>
          <button className="w-full" type="submit">
            Register
          </button>
        </div>
        <div className="text-center text-sm space-x-1">
          <span>Already have an account?</span>
          <Link className="font-medium underline" href="#">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}



export default Register