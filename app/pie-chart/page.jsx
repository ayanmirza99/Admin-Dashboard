"use client"
import { useGlobalContext } from '../Context';

const page = () => {
    const { isOpen } = useGlobalContext();
  return (
    <div className={`h-[85vh] w-[${isOpen ? "85vw" : "90vw"}] flex flex-col items-center justify-center bg-[#fbfafb] dark:bg-[#151929]`}>pie chart</div>
  )
}

export default page