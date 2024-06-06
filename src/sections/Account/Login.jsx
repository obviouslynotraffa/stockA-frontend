import { Link } from "react-router-dom"

const Login = () => {
  return (
    <section className='w-full py-10 mb-8 max-w-screen-wide max-container'>
      <div className='max-lg:hidden w-[75%] h-[750px] bg-white m-auto flex justify-center items-center rounded-lg shadow-2xl shadow-gray-800'>
        <div className='w-[45%] h-full bg-account bg-center bg-cover rounded-lg'>
        </div>
        <div className='w-[55%] h-full flex flex-col items-center py-2 px-5'>

          <div className='w-[75px] h-[45px] bg-no-repeat ml-auto bg-black-logo bg-center bg-contain'>
          </div>

          <div className='flex justify-center flex-col gap-12'>
            <div className='flex justify-center flex-col'>
              <h2 className='font-bold font-montserrat text-3xl'>
                Login to your account
              </h2>
              <span className='text-md font-montserrat text-gray-800'>
                Continue buying sneakers after logging in to your account
              </span>
            </div>
            
            <div className='flex flex-col justify-center gap-3'>
              <button className='w-full border border-gray-400 flex flex-row gap-2 py-2 justify-center items-center hover:bg-gray-100'>
                <div className='bg-google bg-center bg-contain bg-no-repeat w-[24px] h-[24px]'>
                </div>
                <span className='font-palanquin text-lg'>
                  Login with Google
                </span>
              </button>
              <button className='w-full border border-gray-400 flex flex-row gap-2 py-2 justify-center items-center hover:bg-gray-100'>
                <div className='bg-apple bg-center bg-contain bg-no-repeat w-[24px] h-[24px]'>
                </div>
                <span className='font-palanquin text-lg'>
                  Login with Apple
                </span>
              </button>
            </div>

            <div className="inline-flex items-center justify-center w-full gap-5">
              <hr className="h-[2px] w-[42%] bg-gray-500"/>
              <span>
                OR
              </span>
              <hr className="h-[2px] w-[42%] bg-gray-500"/>
            </div>
            


            <form action="" className='flex flex-col justify-center gap-5 '>
              <div className='flex flex-col justify-center'>
                <label forhtml="email" className='font-semibold font-palanquin'>Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required aria-required="true" 
                  aria-label="Insert your email"
                  className="border-b border-gray-600 focus:outline-none text-gray-800"
                />
              </div>
              <div className='flex flex-col justify-center'>
                <label forhtml="password" className='font-semibold font-palanquin'>Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  required aria-required="true" 
                  aria-label="Insert your password"
                  className="border-b border-gray-600 focus:outline-none text-gray-800"
                />
              </div>

              <div className='flex justify-between items-center '>
                <div className='flex flex-row justify-center items-center gap-1'>
                  <input type="checkbox" name="remember" value=""/>
                  <label forhtml="remeber" className='font-palanquin text-md'>
                    Remeber me
                  </label>
                </div>
                <span className='font-palanquin text-blue-700 font-semibold hover:underline hover:cursor-pointer'>
                  Forgot password?
                </span>
              </div>

              <button className='bg-flag-color w-full py-2 hover:bg-green-800 shadow-xl'>
                <span className='text-white font-palanquin text-lg font-bold '>
                  Login
                </span>
              </button>
              <p className='font-palanquin'>
                Don't have an account?
                <Link 
                  to="/signup" 
                  className='font-palanquin text-blue-800 font-semibold hover:underline hover:cursor-pointer px-2'
                >
                  Create one now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-center flex-col padding-x gap-12 lg:hidden'>
        <div className='flex justify-center flex-col'>
          <h2 className='font-bold font-montserrat text-3xl'>
            Login to your account
          </h2>
          <span className='text-md font-montserrat text-gray-800'>
            Continue buying sneakers after logging in to your account
          </span>
        </div>
        
        <div className='flex flex-col justify-center gap-3'>
          <button className='w-full border border-gray-400 flex flex-row gap-2 py-2 justify-center items-center hover:bg-gray-100'>
            <div className='bg-google bg-center bg-contain bg-no-repeat w-[24px] h-[24px]'>
            </div>
            <span className='font-palanquin text-lg'>
              Login with Google
            </span>
          </button>
          <button className='w-full border border-gray-400 flex flex-row gap-2 py-2 justify-center items-center hover:bg-gray-100'>
            <div className='bg-apple bg-center bg-contain bg-no-repeat w-[24px] h-[24px]'>
            </div>
            <span className='font-palanquin text-lg'>
              Login with Apple
            </span>
          </button>
        </div>

        <div className="inline-flex items-center justify-center w-full gap-5">
          <hr className="h-[2px] w-[42%] bg-gray-500"/>
          <span>
            OR
          </span>
          <hr className="h-[2px] w-[42%] bg-gray-500"/>
        </div>
        


        <form action="" className='flex flex-col justify-center gap-5 '>
          <div className='flex flex-col justify-center'>
            <label forhtml="email" className='font-semibold font-palanquin'>Email address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required aria-required="true" 
              aria-label="Insert your email"
              className="border-b border-gray-600 focus:outline-none text-gray-800"
            />
          </div>
          <div className='flex flex-col justify-center'>
            <label forhtml="password" className='font-semibold font-palanquin'>Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required aria-required="true" 
              aria-label="Insert your password"
              className="border-b border-gray-600 focus:outline-none text-gray-800"
            />
          </div>

          <div className='flex justify-between items-center '>
            <div className='flex flex-row justify-center items-center gap-1'>
              <input type="checkbox" name="remember" value=""/>
              <label forhtml="remeber" className='font-palanquin text-md'>
                Remeber me
              </label>
            </div>
            <span className='font-palanquin text-blue-700 font-semibold hover:underline hover:cursor-pointer'>
              Forgot password?
            </span>
          </div>

          <button className='bg-flag-color w-full py-2 hover:bg-green-800 shadow-xl'>
            <span className='text-white font-palanquin text-lg font-bold '>
              Login
            </span>
          </button>
          <p className='font-palanquin'>
            Don't have an account?
            <Link 
              to="/signup" 
              className='font-palanquin text-blue-800 font-semibold hover:underline hover:cursor-pointer px-2'
            >
              Create one now
            </Link>
          </p>
        </form>
      </div>
    </section>
    
  )
}

export default Login