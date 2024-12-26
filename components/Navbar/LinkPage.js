import { LinkList } from "@/constants/linkPage";
const LinkPage = () => {
  return (
    <div className="hidden md:flex space-x-6">
      {LinkList.map((link, index) => (
        <a key={index} href={link.href} className=" hover:text-gray-200">
          {link.text}
        </a>
      ))}
    </div>
  );
};
export default LinkPage;
