import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <>
      <div className="text-center mx-auto max-w-6xl mt-60 text-xl tracking-widest items-center md:mt-32 ">
        <h1
          className="text-5xl lg:text-7xl font-bold mx-auto"
          style={{
            background: "linear-gradient(to right, #3BF686, #4CA9FF)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Hello there! Im 
        </h1>
        <h1
          className="text-5xl font-semibold mx-auto mt-2 px-1"
          style={{
            background: "linear-gradient(to right, #3BF686, #4CA9FF)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {" "}
          I am Nareswara and I am a
        </h1>
        <div className="text-5xl text-center mx-auto lg:text-8xl mt-10">
          <TypeAnimation
            sequence={[
              "FrontEnd Developer",
              1000, 
              "UI Designer",
              1000,
              "UX Researcher",
              1000,
              " Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              background: "linear-gradient(to right, #3BF686, #4CA9FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "150px",
              maxWidth: "100px",
              lineHeight: "1",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="mx-auto flex justify-center mt-36">
        <a href="#profile ">
          <button class="bg-gray-950 text-white  border border-gray-400 border-b-4 font-semibold overflow-hidden relative px-8 py-3 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 mx-20 animate-bounce group">
            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            About Me
          </button>
        </a>
      </div>
    </>
  );
};

export default Header;
