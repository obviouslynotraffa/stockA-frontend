import { Helmet, HelmetProvider } from "react-helmet-async"

const SignUp = () => {
  return (
    <>
      <Helmet>
          <title>Sign Up &ndash; StockA</title>
          <meta name="description" content="Create an account to live the best experience with the StockA's site" />
          <meta name="keywords" content="StockA, sign up, account, sign up, create account"/>
          <meta name="author" content="StockA"/>
      </Helmet>
      <main>
        <section className='w-full py-10 mb-8 max-w-screen-wide max-container'>
          <div className='max-lg:hidden w-[75%] h-[820px] bg-white m-auto flex flex-row-reverse justify-center items-center rounded-lg shadow-2xl shadow-gray-800'>
            <div className='w-[45%] h-full bg-signup bg-center bg-cover rounded-lg'>
            </div>
            <div className='w-[55%] h-full flex flex-col items-center py-2 px-5'>

              <div className='w-[75px] h-[45px] bg-no-repeat ml-auto bg-black-logo bg-center bg-contain'>
              </div>

              <div className='flex justify-center flex-col gap-12'>
                <div className='flex justify-center flex-col'>
                  <h2 className='font-bold font-montserrat text-3xl'>
                    Create your account
                  </h2>
                  <span className='text-md font-montserrat text-gray-800'>
                    Improve your shopping experience by creating an account
                  </span>
                </div>

                <form action="" className='flex flex-col justify-center gap-5 '>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-[45%]">
                      <label htmlFor="name" className='font-semibold font-palanquin'>Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required aria-required="true" 
                        aria-label="Insert your name"
                        className="border-b border-gray-600 focus:outline-none text-gray-800"
                      />
                    </div>
                    <div className="flex flex-col w-[45%]">
                      <label htmlFor="surname" className='font-semibold font-palanquin'>Surname</label>
                      <input 
                        type="text" 
                        id="surname" 
                        name="surname" 
                        required aria-required="true" 
                        aria-label="Insert your surname"
                        className="border-b border-gray-600 focus:outline-none text-gray-800"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className='flex flex-col justify-center w-[45%]'>
                      <label htmlFor="email" className='font-semibold font-palanquin'>Email address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required aria-required="true" 
                        aria-label="Insert your email"
                        className="border-b border-gray-600 focus:outline-none text-gray-800"
                      />
                    </div>
                    <div className='flex flex-col justify-center w-[45%]'>
                      <label htmlFor="city" className='font-semibold font-palanquin'>City</label>
                      <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        required aria-required="true" 
                        aria-label="Insert your city"
                        className="border-b border-gray-600 focus:outline-none text-gray-800"
                      />
                    </div>
                  </div>
                  
                  <div className='flex flex-col justify-center'>
                    <label htmlFor="password" className='font-semibold font-palanquin'>Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      name="password" 
                      required aria-required="true" 
                      aria-label="Insert your password"
                      className="border-b border-gray-600 focus:outline-none text-gray-800"
                    />
                  </div>

                  <div className='flex flex-col justify-center'>
                    <label htmlFor="rep-password" className='font-semibold font-palanquin'>Confirm your password</label>
                    <input 
                      type="password" 
                      id="rep-password" 
                      name="rep-password" 
                      required aria-required="true" 
                      aria-label="Repeat your password"
                      className="border-b border-gray-600 focus:outline-none text-gray-800"
                    />
                  </div>

                  <div className='flex flex-row items-center gap-1'>
                    <input type="checkbox" name="remember" value=""/>
                    <label forhtml="remeber" className='font-montserrat text-md'>
                      I have read and agree to the
                      <span className="font-montserrat text-blue-700 font-semibold hover:underline hover:cursor-pointer pl-1">
                        Privacy Policy
                      </span> 
                    </label>
                  </div>

                  <button className='bg-flag-color w-full py-2 hover:bg-green-800 shadow-xl mt-5'>
                    <span className='text-white font-palanquin text-lg font-bold '>
                      Sign Up
                    </span>
                  </button>
                </form>
                
                <div className="inline-flex items-center justify-center w-full gap-5">
                  <hr className="h-[2px] w-[42%] bg-gray-500"/>
                  <span>
                    OR
                  </span>
                  <hr className="h-[2px] w-[42%] bg-gray-500"/>
                </div>

                <div className='flex flex-col justify-center gap-3'>
                  <button className='w-full border border-gray-400 flex flex-row gap-2 py-2 justify-center items-center hover:bg-gray-100'>
                    <div className='bg-google bg-center bg-contain bg-no-repeat w-[24px] h-[24px]'>
                    </div>
                    <span className='font-palanquin text-lg'>
                      Sign up with Google
                    </span>
                  </button>
                  <button className='w-full border border-gray-400 flex flex-row gap-2 py-2 justify-center items-center hover:bg-gray-100'>
                    <div className='bg-apple bg-center bg-contain bg-no-repeat w-[24px] h-[24px]'>
                    </div>
                    <span className='font-palanquin text-lg'>
                      Sign up with Apple
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center flex-col padding-x gap-12 lg:hidden'>
            <div className='flex justify-center flex-col'>
              <h2 className='font-bold font-montserrat text-3xl'>
                Create your account
              </h2>
              <span className='text-md font-montserrat text-gray-800'>
                Improve your shopping experience by creating an account
              </span>
            </div>

            <form action="" className='flex flex-col justify-center gap-5 '>
              <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className='font-semibold font-palanquin'>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required aria-required="true" 
                    aria-label="Insert your name"
                    className="border-b border-gray-600 focus:outline-none text-gray-800"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="surname" className='font-semibold font-palanquin'>Surname</label>
                  <input 
                    type="text" 
                    id="surname" 
                    name="surname" 
                    required aria-required="true" 
                    aria-label="Insert your surname"
                    className="border-b border-gray-600 focus:outline-none text-gray-800"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div className='flex flex-col justify-center'>
                  <label htmlFor="email" className='font-semibold font-palanquin'>Email address</label>
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
                  <label htmlFor="city" className='font-semibold font-palanquin'>City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    required aria-required="true" 
                    aria-label="Insert your city"
                    className="border-b border-gray-600 focus:outline-none text-gray-800"
                  />
                </div>
              </div>
              
              <div className='flex flex-col justify-center'>
                <label htmlFor="password" className='font-semibold font-palanquin'>Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  required aria-required="true" 
                  aria-label="Insert your password"
                  className="border-b border-gray-600 focus:outline-none text-gray-800"
                />
              </div>

              <div className='flex flex-col justify-center'>
                <label htmlFor="rep-password" className='font-semibold font-palanquin'>Confirm your password</label>
                <input 
                  type="password" 
                  id="rep-password" 
                  name="rep-password" 
                  required aria-required="true" 
                  aria-label="Repeat your password"
                  className="border-b border-gray-600 focus:outline-none text-gray-800"
                />
              </div>

              <div className='flex flex-row items-center gap-1'>
                <input type="checkbox" name="remember" value=""/>
                <label forhtml="remeber" className='font-montserrat text-md'>
                  I have read and agree to the
                  <span className="font-montserrat text-blue-700 font-semibold hover:underline hover:cursor-pointer pl-1">
                    Privacy Policy
                  </span> 
                </label>
              </div>

              <button className='bg-flag-color w-full py-2 hover:bg-green-800 shadow-xl mt-5'>
                <span className='text-white font-palanquin text-lg font-bold '>
                  Sign Up
                </span>
              </button>
            </form>
            
            <div className="inline-flex items-center justify-center w-full gap-5">
              <hr className="h-[2px] w-[42%] bg-gray-500"/>
              <span>
                OR
              </span>
              <hr className="h-[2px] w-[42%] bg-gray-500"/>
            </div>

            <div className='flex flex-col justify-center gap-3'>
              <button className='w-full border border-gray-400 flex flex-row gap-2 py-2 justify-center items-center hover:bg-gray-100'>
                <div className='bg-google bg-center bg-contain bg-no-repeat w-[24px] h-[24px]'>
                </div>
                <span className='font-palanquin text-lg'>
                  Sign up with Google
                </span>
              </button>
              <button className='w-full border border-gray-400 flex flex-row gap-2 py-2 justify-center items-center hover:bg-gray-100'>
                <div className='bg-apple bg-center bg-contain bg-no-repeat w-[24px] h-[24px]'>
                </div>
                <span className='font-palanquin text-lg'>
                  Sign up with Apple
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default SignUp