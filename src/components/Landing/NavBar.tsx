type NavBarProps = {
  handleClick: (page: string) => void;
  pagestate: string;
};

const NavBar: React.FC<NavBarProps> = ({ handleClick, pagestate }) => {
  return (
    <div className="fixed left-0 top-0 z-20 flex w-full items-center justify-between px-[10%] pt-[2%]">
      <div className="items-center justify-around space-x-8">
        <span onClick={() => handleClick("Resume")}>JOSEPH</span>
        <span onClick={() => handleClick("Project")}>PROGRAMMING</span>
        <span onClick={() => handleClick("Gallery")}>VISUAL ART</span>
      </div>
      <div>{pagestate}</div>
    </div>
  );
};
export default NavBar;
