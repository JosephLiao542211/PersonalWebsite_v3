type NavBarProps = {
  handleClick: (page: string) => void;
  pagestate: string;
};

const NavBar: React.FC<NavBarProps> = ({ handleClick, pagestate }) => {
  return (
    <div className="fixed left-0 top-0 z-20 flex w-full items-center justify-between px-[10%] pt-[2%]">
      <div className="items-center justify-around space-x-8">
        <span
          className={`cursor-pointer font-ztbro text-4xl tracking-wide transition-all  ${
            pagestate === "Resume" ? "  text-white" : " text-gray-400"
          }`}
          onClick={() => handleClick("Resume")}
        >
          ME
        </span>
        <span
          className={`cursor-pointer font-ztbro text-4xl tracking-wide transition-all  ${
            pagestate === "Project" ? "  text-white" : " text-gray-400"
          }`}
          onClick={() => handleClick("Project")}
        >
          PROGRAMMING
        </span>
        <span
          className={`cursor-pointer font-ztbro text-4xl tracking-wide transition-all  ${
            pagestate === "Gallery" ? "  text-white" : " text-gray-400"
          }`}
          onClick={() => handleClick("Gallery")}
        >
          ART
        </span>
      </div>
      <div className="font-ztbro text-4xl tracking-wide text-white">RESUME</div>
    </div>
  );
};
export default NavBar;
