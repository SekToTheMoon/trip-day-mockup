import { Input } from "postcss";
import IconNav from "./IconNav";
import LinkPage from "./LinkPage";
import RightNav from "./RightNav";
import SearchInput from "./SearchInput";
import { Suspense } from "react";

const NavbarContainer = () => {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between bg-transparent ">
      <div className="flex items-center gap-4">
        <IconNav />
        <Suspense fallback={<div>loading</div>}>
          <SearchInput />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <LinkPage />
        <RightNav />
      </div>
    </nav>
  );
};
export default NavbarContainer;
