import { EyeClosed } from 'lucide-react';
import { FaApple, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050c0e]  text-white">
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      <div className="absolute -bottom-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-orange-600 opacity-30 blur-[120px]"></div>

      <nav className="relative z-10 flex items-center gap-2 p-6 md:p-10">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#12c4b2]">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
        <span className="text-xl font-bold lowercase tracking-tight">aps</span>
      </nav>

      {/* <main className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2"> */}
      <main className="relative z-10 grid w-full grid-cols-1 items-center gap-12 px-10 pb-20 pt-10 lg:grid-cols-2">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl font-medium leading-tight md:text-5xl lg:text-5xl">
            Expert level Cybersecurity in <span className="text-[#12c4b2]">hours</span> not weeks.
          </h1>

          <div className="space-y-2">
            <h3 className="text-md font-semibold  text-gray-200">What's included</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#12c4b2]">✓</span>
                <p className="text-md">Effortlessly spider and map targets to uncover hidden security flaws</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#12c4b2]">✓</span>
                <p className="text-md">Deliver high-quality, validated findings in hours, not weeks.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#12c4b2] text-sm">✓</span>
                <p className="text-md">Generate professional, enterprise-grade security reports automatically.</p>
              </li>
            </ul>
          </div>

          {/* Trustpilot Section */}
          <div className="pt-4">
            <div className="flex items-center gap-1 text-[#00b67a]">
              <span className="text-xl font-bold">★</span>
              <span className="text-sm font-bold tracking-tight text-white">Trustpilot</span>
            </div>
            <p className="mt-1 text-lg font-semibold">
              Rated 4.5/5.0 <span className="ml-2 text-sm font-normal text-gray-500">(100k+ reviews)</span>
            </p>
          </div>
        </div>

        {/* Right Side: Sign Up Card */}
        <div className="w-full max-w-md justify-self-center rounded-[2.5rem] bg-white p-8 text-black shadow-2xl md:p-10 lg:justify-self-end">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Sign up</h2>
            <p className="mt-2 text-gray-500">
              Already have an account? <a href="#" className="text-[#12c4b2] underline underline-offset-4 font-medium">Log in</a>
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name*" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:border-[#12c4b2]" />
              <input type="text" placeholder="Last name*" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:border-[#12c4b2]" />
            </div>
            <input type="email" placeholder="Email address*" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:border-[#12c4b2]" />
            <div className="relative">
              <input type="password" placeholder="Password (8+ characters)*" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:border-[#12c4b2]" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-black"><EyeClosed /></span>
            </div>

            <div className="flex items-center gap-3 py-2 justify-center">
              <input type="checkbox" className="mt-1 h-8 w-5 rounded accent-[#12c4b2] text-gray-100" />
              <label className="text-[14px] leading-tight text-gray-500 font-medium">
                I agree to Aps's <span className="text-blue-600 underline">Terms & Conditions</span> and acknowledge the <span className="text-blue-600 underline">Privacy Policy</span>
              </label>
            </div>

            <Link to='/DashBoard'>
            <button className="w-full rounded-full bg-[#12c4b2] py-4 font-bold text-white transition-transform active:scale-95 hover:opacity-90">
              Create account
            </button>
              </Link>
          </form>

          {/* Social Auth Buttons  */}
          <div className="mt-8 flex items-center gap-3">
            <button className="flex flex-1 justify-center rounded-full bg-black py-3 text-white hover:bg-gray-800">
              <span className="text-xl"><FaApple/></span>
            </button>
            <button className="flex flex-1 justify-center bg-[#969696]/50 rounded-full border border-gray-300  py-3 hover:bg-gray-50">
              <span className="font-bold "><img src='https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000' className='h-6 w-6'  /></span>
            </button>
            <button className="flex flex-1 justify-center rounded-full bg-[#4a69e2] py-3 text-white hover:bg-blue-600">
              <span className="font-bold italic"><img src='https://img.icons8.com/?size=25&id=BD98MqUP8eNf&format=png&color=ffffff' className='text-white' /></span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default LoginPage;