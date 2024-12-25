import Currency from "./Currency";
import LanguagesNav from "./LanguagesNav";
import ProfileNav from "./ProfileNav";

const RightNav = () => {
  return (
    <div className="flex justify-between">
      <LanguagesNav />
      <Currency />

      <ProfileNav />
    </div>
  );
};
export default RightNav;
