import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navigation/Navbar";
import Button from "../../Components/Buttons/Button";
import OutlineButton from "../../Components/Buttons/OutlineButton";

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
      <div className="static rounded-bl-[10rem] bg-hero-pattern lg:h-4/6 h-[85vh] items-center flex flex-col  w-full">
        <Navbar />
        <div className="flex-1 flex flex-col gap-5 px-10 justify-center h-full text-White text-center font-Overpass">
        <h1 className=" font-medium text-5xl ">
          A modern publishing platform
        </h1>
        <p className="font-thin text-2xl">
        Grow your audience and build your online brand
        </p>
        <div className="flex justify-center gap-5">
        <Button value="Start for Free"/>
        <OutlineButton value="Learn More"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
