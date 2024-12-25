import { LinkList } from "@/constants/linkPage";
const LinkPage = () => {
  return (
    <div className="hidden md:flex space-x-6">
      {LinkList.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-gray-600 hover:text-blue-600"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};
export default LinkPage;
