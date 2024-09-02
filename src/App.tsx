// import Button from "./components/Button";
// import Icon from "./components/Icon";
// import Pin from "./components/Pin";
import NavBar from "./components/Landing/NavBar";
import BarNav from "./components/Landing/BarNav";
import Landing from "./pages/Landing";
import Page from "./pages/Page";
import { useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [page, setPage] = useState("Resume");
  function handleClick(page: string) {
    setPage(page);
  }

  return (
    <div className="overflow-x-hidden">
      <Landing
        NavbarTop={<NavBar handleClick={handleClick} pagestate={page}></NavBar>}
        NavbarBottom={
          <BarNav handleClick={handleClick} pagestate={page}></BarNav>
        }
      ></Landing>
      <Page page={page}></Page>
      <Footer></Footer>
    </div>
  );
}

export default App;
