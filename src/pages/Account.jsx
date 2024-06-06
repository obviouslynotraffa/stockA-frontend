import Login from "../sections/Account/Login"
import { Helmet } from "react-helmet"

const Account = () => {
  return (
    <>
      <Helmet>
          <title>Login &ndash; StockA</title>
          <meta name="description" content="Login to your StockA's account to live the full experience" />
          <meta name="keywords" content="StockA, login, accoutn, sign in, sign up, create accoutn"/>
          <meta name="author" content="StockA"/>
      </Helmet>
      <main>
        <Login />
      </main>
    </>
  )
}

export default Account
