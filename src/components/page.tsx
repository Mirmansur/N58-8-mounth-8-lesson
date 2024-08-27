import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="Header  bg-blue-950  ">
      <div className="container">
        <div className="header flex  items-center justify-between  p-4 ">
          <div className="header-one flex items-center gap-2 text-white text-3xl">
            <FaGithub />
            <h1>Github Finder</h1>
          </div>
          <div className="header-two flex  items-center gap-2 text-white text-xl">
            <h1>Home</h1>
            <p>About</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
