import { Link } from 'react-router-dom';

const Breadcrumb = ({shoeName}) => {
  return (
    <nav className='py-5 padding-x max-w-screen-wide max-container w-full flex flex-row items-center justify-center gap-3 flex-wrap text-lg'>
        <Link 
            to="/"
            className='hover:text-flag-color hover:underline'
        >
            Home
        </Link>

        <span> / </span>

        <Link 
            to="/products"
            className='hover:text-flag-color hover:underline'
        >
            Products
        </Link>

        <span> / </span>

        <span className='text-gray-600'>
            {shoeName}
        </span>
    </nav>
  )
}

export default Breadcrumb