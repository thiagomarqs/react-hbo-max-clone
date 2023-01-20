import { ReactComponent as MenuIcon } from 'assets/icons/hamburger-menu.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { useWindowScroll } from 'hooks/useWindowScroll';
import { Link } from 'react-router-dom';

export interface NavbarProps {}

export const Header = (props: NavbarProps) => {
  
  const { scrollY } = useWindowScroll();

  return (
    <div className={`fixed z-10 top-0 p-6 h-[80px] transition-background duration-300 w-screen text-white bg-gradient-to-b from-[#00000080] md:py-6 md:px-14 ${scrollY > 200 ? "bg-[#111111f2]" : ""}`}>
      <div className="flex justify-between content-center">
        <div className='h-fit'>
          <MenuIcon/>
        </div>
        <div className="w-24 h-fit my-auto mx-0 md:w-[9vw]">
          <Link to="/"><img src="/assets/images/hbomaxlogo.png" alt="HBO Max logo"/></Link>
        </div>
        <div className='h-fit'>
          <Link to="search"><SearchIcon/></Link>
        </div>
      </div>
    </div>
  )
}