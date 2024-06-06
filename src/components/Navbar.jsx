import { useState } from 'react';
import { navLinks } from '../constants';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='padding-x py-8 z-10 w-full max-w-screen-wide m-auto max-lg:border-b-2 max-lg:border-black max-lg:sticky max-lg:top-0 bg-white'>
      <nav className='flex justify-between items-center max-container'>
        <div className='m-0 w-[129px] h-[29px] mr-16 bg-black-logo bg-contain bg-center bg-no-repeat'>
          <h1 className='sr-only'>
            StockA
          </h1>
        </div>
        <ul className='flex-1 flex flex-start items-center gap-16 max-lg:hidden font-medium text-lg font-montserrat [&>li:last-child]:ml-auto'>
          {navLinks.map((item) => (
            <CustomLink to={item.href} key={item.label}>
              {item.label}
            </CustomLink>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <button 
            onClick={toggleMenu}
            className={menuOpen ? "bg-close-menu bg-contain bg-center bg-no-repeat w-[42px] h-[42px]" : "bg-hamburger-menu bg-contain bg-center bg-no-repeat w-[42px] h-[42px]"}
          >
            <span className='sr-only'>
              Toggle Menu
            </span>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className='bg-black text-white p-4 absolute top-[108px] right-0 w-full h-[360px] flex flex-col items-start z-50 lg:hidden'>
          <ul className='flex flex-col items-start gap-10 pt-5 w-full'>
            {navLinks.map((item) => (
              <CustomLink
                to={item.href}
                key={item.label}
                onClick={() => setMenuOpen(false)}
                className="text-lg leading-normal font-medium font-montserrat"
              >
                {item.label}
              </CustomLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'border-b-2 text-lg leading-normal font-medium font-montserrat border-flag-color' : "hover:text-gray-500"}>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <Link to={to} {...props}>
          {children}
        </Link>
      )}
    </li>
  );
}

export default Navbar;
