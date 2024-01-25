"use client";
import { IoMdSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePerson2 } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useGlobalContext } from "../Context/index";
import theme from "../theme";

const Topbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { isOpen } = useGlobalContext();
  return (
    <>
      <div
        className={`h-[15vh] w-[${isOpen ? "85vw" : "95vw"
          }] flex justify-between bg-[#fbfafb] dark:bg-[${theme.dark.bg
          }] text-[1vw]`}
      >
        <div
          className={`flex h-[2vw] w-max px-4 mt-[1vw] ml-[1vw] bg-transparent border-[0.2px] rounded-lg hover:bg-[#f1eef0] dark:bg-transparent dark:hover:bg-[#1c2438] dark:border-gray-600`}
        >
          <input
            type="text"
            className="bg-transparent text-[1em] focus:outline-none"
            placeholder="Search"
          />
          <IoMdSearch className="pt-2 text-[1.6em] text-[#414141] dark:text-gray-400" />
        </div>
        <div className="flex text-[4em] md:text-[1.4em] gap-[1vw] mr-[1vw] mt-[1vw] text-[#555153] dark:text-gray-400">
          <div
            className={`w-max h-max p-[0.4vw] flex justify-center items-center bg-transparent hover:bg-[#f1eef0] dark:hover:bg-[#1c2438] transition-all ease-in-out duration-200 rounded-full`}
            onClick={() => {
              resolvedTheme === "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            {resolvedTheme === "light" ? <FiSun /> : <IoMoonOutline />}
          </div>
          <div
            className={`w-max h-max p-[0.4vw] flex justify-center items-center bg-transparent hover:bg-[#f1eef0] dark:hover:bg-[#1c2438] transition-all ease-in-out duration-200 rounded-full`}
          >
            <IoNotificationsOutline />
          </div>
          <div
            className={`w-max h-max p-[0.4vw] flex justify-center items-center bg-transparent hover:bg-[#f1eef0] dark:hover:bg-[#1c2438] transition-all ease-in-out duration-200 rounded-full`}
          >
            <MdOutlinePerson2 />
          </div>
          <div
            className={`w-max h-max p-[0.4vw] flex justify-center items-center bg-transparent hover:bg-[#f1eef0] dark:hover:bg-[#1c2438] transition-all ease-in-out duration-200 rounded-full`}
          >
            <IoSettingsOutline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
