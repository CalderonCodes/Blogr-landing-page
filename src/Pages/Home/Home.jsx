import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navigation/Navbar";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1440);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen h-screen">
      
      <div
        className="static rounded-bl-[10rem] bg-hero-pattern h-4/6  w-full"
      >
        <Navbar/>
      </div>
    </div>
  );
}

export default Home;
