import { blackLogo } from '../assets/icons'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>

          <img
            src={blackLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden font-medium'>
          {navLinks.map((item) => (
            <Link to={item.href} key={item.label}>{item.label}</Link>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
