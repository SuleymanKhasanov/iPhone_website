import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
      <nav className="flex w-full items-center screen-max-width">
        <img src={appleImg} alt="apple" width={18} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((element, index) => (
            <div
              key={index}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {element}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
