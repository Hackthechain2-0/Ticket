import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full space-y-6">
      <div className="mx-auto max-w-2xl p-6 space-y-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Festive</h1>
          <p className="text-gray-500 dark:text-gray-400">Login to your account</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="m@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button className="w-full">Login</button>
          <button className="w-full" variant="outline">
            Login with Google
          </button>
        </div>
        <div className="space-y-2 text-center">
          <Link className="text-sm underline" href="#">
            Forgot your password?
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Don't have an account?
            <Link className="underline" href="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
};



export default Login;
