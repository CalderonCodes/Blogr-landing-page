import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../Components/Navigation/Navbar";
import Button from "../../Components/Buttons/Button";
import OutlineButton from "../../Components/Buttons/OutlineButton";
import Footer from "../../Components/Footer/Footer";

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
            <Button value="Start for Free" />
            <OutlineButton value="Learn More" />
          </div>
        </div>
      </div>

      <h1 className="text-3xl lg:text-5xl font-bold text-center px-5 font-Overpass text-VeryDarkBlue  pt-32">
          {" "}
          Designed for the future{" "}
        </h1>
      <div className="flex flex-col lg:flex-row-reverse lg:overflow-x-clip items-center lg:justify-end lg:px-24 relative justify-center min-h-screen font-Overpass text-VeryDarkBlue pb-64">
        
        <img
          src="/src/assets/illustration-editor-mobile.svg"
          alt="editor-mobile"
          className="my-10 w-11/12 lg:hidden"
        />
        <img
        src="/src/assets/illustration-editor-desktop.svg"
        alt="editor-mobile"
        className="my-10 w-3/5 relative  left-32 lg:my-0 hidden lg:inline-block"
      />
      <div className="lg:text-left text-center lg:min-w-1/2">
      <h1 className="text-3xl font-bold lg:px-10 px-5">
          {" "}
          Introducing an extensible editor{" "}
        </h1>
        <p className="px-10 py-5 lg:text-base lg:leading-7 text-VeryDarkGrayishBlue font-medium text-lg">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h1 className="text-3xl font-bold  lg:px-10 px-5">
          {" "}
          Robust content management{" "}
        </h1>
        <p className="px-10 py-5 lg:text-base lg:leading-7 text-VeryDarkGrayishBlue font-medium text-lg">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
      
      
        
      </div>

      <div className="h-[85vh] relative flex flex-col items-center rounded-bl-[7.5rem] rounded-tr-[7.5rem] bg-VeryDarkDesaturatedBlue">
        <img
          className="absolute bottom-[45vh] "
          src="/src/assets/illustration-phones.svg"
          alt=""
        />
        <div className="relative top-[40vh] text-White font-Overpass">
          <h1 className="text-5xl font-bold text-center px-5">
            {" "}
            State of the Art Infrastructure{" "}
          </h1>
          <p className="px-10 py-5  text-center font-medium text-lg">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:overflow-x-clip items-center lg:justify-end lg:px-24 relative justify-center min-h-screen font-Overpass text-VeryDarkBlue pb-64">
        
        <img
          src="/src/assets/illustration-laptop-mobile.svg"
          alt="editor-mobile"
          className="my-10 w-11/12 lg:hidden"
        />
        <img
        src="/src/assets/illustration-laptop-desktop.svg"
        alt="editor-mobile"
        className="my-10 w-4/5 relative  right-16 lg:my-0 hidden lg:inline-block"
      />
      <div className="lg:text-left text-center lg:min-w-1/2">
      <h1 className="text-3xl font-bold lg:px-10 px-5">
          {" "}
          Free, open, simple{" "}
        </h1>
        <p className="px-10 py-5 lg:text-base lg:leading-7 text-VeryDarkGrayishBlue font-medium text-lg">
        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
        <h1 className="text-3xl font-bold  lg:px-10 px-5">
          {" "}
          Powerful tooling{" "}
        </h1>
        <p className="px-10 py-5 lg:text-base lg:leading-7 text-VeryDarkGrayishBlue font-medium text-lg">
        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.
        </p>
      </div>
      
      
        
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
