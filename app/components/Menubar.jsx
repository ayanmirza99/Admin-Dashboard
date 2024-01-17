"use client"
import { BiMenuAltRight } from "react-icons/bi";
import { useGlobalContext } from "../Context";

const Menubar = () => {

  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <>
      <div className={`h-[100vh] w-[${isOpen ? "15vw" : "4vw"}] bg-[#f1eef0] dark:bg-[#1c2438] overflow-hidden px-[1vw] py-[0.8vw]`}>
        <button className="w-full flex justify-end text-[2.5vw] text-[#414141] dark:text-gray-400" onClick={() => { setIsOpen(!isOpen) }}>
          <BiMenuAltRight />
        </button>
      </div>
    </>
  )
}

export default Menubar