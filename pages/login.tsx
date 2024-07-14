export default function Login() {
    const handleSubmit = (e:any) => {
        e.preventDefault();
        // history.push('/dashboard')
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/cover3.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 w-full max-w-xl px-8 py-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Karate Coaching Login</h1>
        </div>
        <form className="space-y-12" onSubmit={(e)=>handleSubmit(e)}>
          <div className="rounded-md shadow-sm space-y-8">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full px-4 py-6  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out transform hover:scale-105" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full px-4 py-6 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out transform hover:scale-105" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-300 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" className="ripple group relative flex w-full justify-center py-6 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out transform hover:scale-105">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
