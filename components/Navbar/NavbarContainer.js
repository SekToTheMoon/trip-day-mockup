import IconNav from "./IconNav";
import LinkPage from "./LinkPage";
import RightNav from "./RightNav";
import SearchInput from "./SearchInput";

const NavbarContainer = () => {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between bg-transparent ">
      <div className="flex items-center gap-4">
        <IconNav />
        <SearchInput />
      </div>
      <div className="flex items-center gap-4">
        <LinkPage />
        <RightNav />
      </div>
    </nav>
  );
};
export default NavbarContainer;
