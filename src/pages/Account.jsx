import Login from "../sections/Account/Login"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Account = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
            <title>Login &ndash; StockA</title>
            <meta name="description" content="Login to your StockA's account to live the full experience" />
            <meta name="keywords" content="StockA, login, accoutn, sign in, sign up, create accoutn"/>
            <meta name="author" content="StockA"/>
        </Helmet>
      </HelmetProvider>
      <main>
        <Login />
      </main>
    </>
  )
}

export default Account
