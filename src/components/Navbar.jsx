import { blackLogo } from '../assets/icons'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

import { Link, useMatch, useResolvedPath  } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='padding-x py-8 z-10 w-full max-w-screen-wide m-auto'>
      <nav className='flex justify-between items-center max-container '>
          <img
            src={blackLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px] mr-16'
          />
        <ul className='flex-1 flex flex-start items-center gap-16 max-lg:hidden font-medium text-lg font-montserrat '>
          {navLinks.map((item) => (
            <CustomLink
              to={item.href} 
              key={item.label} 
            >
              {item.label}
            </CustomLink>
          ))}
          <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 ml-auto' >
          Sign in
        </div>
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'border-b-2 border-flag-color' : "hover:text-gray-500"}>
      {isActive ?
          <p>{children}</p>
        :
          <Link to={to} {...props}>
            {children}
          </Link>
      }
    </li>
  )
}

export default Navbar
