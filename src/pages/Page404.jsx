import { Helmet, HelmetProvider } from "react-helmet-async"
import { Link } from "react-router-dom"


const Page404 = () => {
  return (
    <>
      <Helmet>
        <title>404 &ndash; StockA</title>
        <meta name="description" content="Page not found" />
        <meta name="keywords" content="Page not found"/>
        <meta name="author" content="StockA"/>
      </Helmet>
      <main className="w-full py-10 padding-x max-w-screen-wide max-container">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-around items-center gap-5">
          <div className="w-[85%] md:w-[40%] h-[250px] md:h-[500px] bg-404 bg-center bg-no-repeat bg-contain">
          </div>

          <div className="flex flex-col items-center gap-3 w-[95%] md:w-[40%]">
            <h2 className="font-bold font-montserrat text-8xl">
              404
            </h2>
            <p className="text-3xl font-palanquin ">
              Um, yeah. This is awkward.
            </p>
            <p className="text-xl font-palanquin text-slate-gray">
              We tried really hard, but we couldn't find the page you were looking for. You may find what you were looking for on our
              <Link to={"/"} className="text-flag-color hover:underline pl-1 font-semibold">
                Homepage
              </Link> or
              <Link to={"/products"} className="text-flag-color hover:underline pl-1 font-semibold">
                Products list
              </Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page404
