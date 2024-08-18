import { useState } from "react";

import Button from "./components/Button";
import Icon from "./components/Icon";
import Pin from "./components/Pin";
import Typewriter from "./components/Typewriter";

import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  const words = [
    { text: "Vite", className: "text-[#a95eff]" },
    { text: " + " },
    { text: "React", className: "text-[#61dafb]" },
    { text: " + " },
    { text: "Tailwindcss", className: "text-[#0ea5e9]" },
    { text: " + " },
    { text: "Framer Motion", className: "text-[#ff57c8]" },
  ];

  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center gap-2 bg-[#17c666] pb-8 text-white">
        
      </header>
    </div>
  );
}

export default App;
