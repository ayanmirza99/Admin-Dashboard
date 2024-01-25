"use client";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoBarChart } from "react-icons/io5";
import { MdOutlinePieChart } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import { useGlobalContext } from "../Context/index";
import Image from "next/image";
import AdminImg from "@/public/IMG_9974.jpg";
import Link from "next/link";

const Menubar = () => {
  const menuLinks = [
    {
      name: "Dashboard",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "Team",
      path: "/team",
      icon: <MdPeople />,
    },
    {
      name: "Contacts",
      path: "/contacts",
      icon: <MdOutlineContacts />,
    },
    {
      name: "Invoices",
      path: "/invoices",
      icon: <LiaFileInvoiceSolid />,
    },
    {
      name: "Profile Form",
      path: "/profile-form",
      icon: <CgProfile />,
    },
    {
      name: "Calender",
      path: "/calender",
      icon: <SlCalender />,
    },
    {
      name: "FAQ Page",
      path: "/faq",
      icon: <HiOutlineQuestionMarkCircle />,
    },
    {
      name: "Bar Chart",
      path: "/bar-chart",
      icon: <IoBarChart />,
    },
    {
      name: "Pie Chart",
      path: "/pie-chart",
      icon: <MdOutlinePieChart />,
    },
    {
      name: "Line Chart",
      path: "/line-chart",
      icon: <FaChartLine />,
    },
    {
      name: "Geography Chart",
      path: "/geography-chart",
      icon: <FaRegMap />,
    },
  ];
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <>
      <div
        className={`h-[100vh] w-[${
          isOpen ? "20vw" : "5vw"
        }] flex flex-col items-center gap-[0.5vw] bg-[#f1eef0] dark:bg-[#1c2438] text-[#414141] dark:text-gray-400 px-[0.5vw] py-[0.8vw] text-[2.5vw]`}
      >
        <button
          className={`w-full h-[5%] flex ${
            isOpen ? "justify-end" : "justify-center"
          } text-[1em]`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <BiMenuAltRight />
        </button>
        <div
          className={`w-full h-max flex ${
            isOpen ? "flex-col" : ""
          } justify-center items-center gap-[0.2em]`}
        >
          <div
            className={`${
              isOpen ? "h-[3em] w-[3em]" : "h-[1.5em] w-[1.5em] mt-[0.5vw]"
            } rounded-full relative overflow-hidden peer`}
          >
            <Image
              src={AdminImg}
              fill
              alt="Admin Image"
              className="w-full h-full bg-cover bg-center"
            />
          </div>
          <h1
            className={`${
              isOpen
                ? "block text-[0.8em]"
                : "hidden peer-hover:block transition-all ease-in-out duration-300 absolute left-[5%] text-[0.45em] px-[0.6em] py-[0.2em] rounded-full bg-[#f1eef0] dark:bg-[#1c2438]"
            }`}
          >
            Ayan Mirza
          </h1>
        </div>
        <div
          className={`w-full h-[70%] flex flex-col justify-center ${
            isOpen ? "px-[1.5em] gap-[1.2vw]" : "px-[1em] gap-[1.5em] mt-[1em]"
          } text-[0.45em] mt-[0.5vw] z-10`}
        >
          {menuLinks.map((item, index) => {
            return (
              <Link href={item.path} key={index}>
                <div className="flex gap-[0.5em] items-center relative cursor-pointer hover:text-[red]">
                  <span className={`${isOpen ? "" : "text-[1.5em] peer"}`}>
                    {item.icon}
                  </span>
                  <h1
                    className={`${
                      isOpen
                        ? ""
                        : "absolute left-[160%] hidden peer-hover:block transition-all ease-in-out duration-300 px-[1em] py-[0.2em] rounded-r-full bg-[#f1eef0] dark:bg-[#1c2438] whitespace-nowrap"
                    }`}
                  >
                    {item.name}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menubar;
