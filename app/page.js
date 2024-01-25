"use client";
import { useGlobalContext } from "./Context/index";

const page = () => {
  const { isOpen } = useGlobalContext();
  return (
    <>
      <div
        className={`h-[85vh] w-[${isOpen ? "85vw" : "95vw"}] flex flex-col items-center justify-center bg-[#fbfafb] dark:bg-[#151929]`}
      >
        <h1 className="text-[4vw]">Ayan Mirza</h1>
        <button className="bg-[#fff] py-3 px-5 rounded-lg font-bold text-black">
          Change Theme
        </button>
      </div>
    </>
  );
};

export default page;
