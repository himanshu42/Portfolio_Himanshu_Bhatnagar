import React from "react";
import Logo from "../assets/Profile.png";
import {
  IoLogoJavascript,
  IoLogoCss3
} from "react-icons/io5";
import {
  TbBrandTypescript,
  TbBrandReactNative
} from "react-icons/tb";
import {
  SiTailwindcss,
  SiReact,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress
} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const Welcome = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 bg-[#2C3037] text-[#AAB1BE]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          {/* Avatar */}
          <svg width="320" height="320" viewBox="0 0 200 200">
            <defs>
              <clipPath id="scallopClip1">
                <path
                  d="
                    M100,10
                    C115,10 130,20 140,20
                    C160,20 180,40 180,60
                    C180,80 190,90 190,100
                    C190,110 180,120 180,140
                    C180,160 160,180 140,180
                    C120,180 115,190 100,190
                    C85,190 80,180 60,180
                    C40,180 20,160 20,140
                    C20,120 10,110 10,100
                    C10,90 20,80 20,60
                    C20,40 40,20 60,20
                    C80,20 85,10 100,10
                    Z
                  "
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                </path>
              </clipPath>
            </defs>

            <image
              href={Logo}
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#scallopClip1)"
            />
          </svg>

          {/* Name */}
          <h1 className="text-4xl font-bold mt-6">
            Himanshu Bhatnagar
          </h1>

          <p className="text-xl text-gray-400 mt-2">
            Front-End Developer
          </p>

          <p className="text-lg text-gray-500">
            Chittorgarh • Bangalore
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            <Skill icon={<IoLogoJavascript className="text-yellow-400" />} label="JavaScript" />
            <Skill icon={<TbBrandTypescript className="text-blue-500" />} label="TypeScript" />
            <Skill icon={<FaHtml5 className="text-orange-500" />} label="HTML 5" />
            <Skill icon={<IoLogoCss3 className="text-blue-400" />} label="CSS" />
            <Skill icon={<SiReact className="text-cyan-400" />} label="React.js" />
            <Skill icon={<TbBrandReactNative className="text-cyan-400" />} label="React Native" />
            <Skill icon={<SiNodedotjs className="text-green-500" />} label="Node.js" />
            <Skill icon={<SiExpress />} label="Express.js" />
            <Skill icon={<SiGit className="text-orange-500" />} label="Git" />
            <Skill icon={<SiGithub />} label="GitHub" />
            <Skill icon={<SiTailwindcss className="text-teal-400" />} label="Tailwind" />
            <Skill icon={<SiNextdotjs />} label="Next.js" />

          </div>
        </div>

      </div>
    </section>
  );
};

/* Small reusable component */
const Skill = ({ icon, label }) => (
  <div className="flex items-center gap-3 bg-gray-800 px-4 py-3 rounded-lg hover:scale-105 transition">
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </div>
);

export default Welcome;
