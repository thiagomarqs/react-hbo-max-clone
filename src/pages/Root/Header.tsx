import { ReactComponent as MenuIcon } from 'assets/icons/hamburger-menu.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { useWindowScroll } from 'hooks/useWindowScroll';

export interface NavbarProps {}

// TODO: Hamburger menu
export const Header = (props: NavbarProps) => {
  
  const { scrollY } = useWindowScroll();

  return (
    <div className={`fixed z-10 top-0 p-6 h-[80px] transition-background duration-300 w-full text-white bg-gradient-to-b from-[#00000080] ${scrollY > 200 ? "bg-[#111111f2]" : ""}`}>
      <div className="flex justify-between content-center">
        <div className='h-fit'>
          <MenuIcon/>
        </div>
        <div className="w-24 h-fit my-auto mx-0">
          <img src="/src/assets/images/hbomaxlogo.png" alt="HBO Max logo" />
        </div>
        <div className='h-fit'>
          <SearchIcon/>
        </div>
      </div>
    </div>
  )
}