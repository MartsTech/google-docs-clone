import HeaderLeft from "./HeaderLeft";
import HeaderSearch from "./HeaderSearch";
import HeaderRight from "./HeaderRight";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header
      className="sticky top-0 z-50 flex items-center px-4 py-2 
      shadow-md bg-white"
    >
      <HeaderLeft />
      <HeaderSearch />
      <HeaderRight />
    </header>
  );
};

export default Header;
