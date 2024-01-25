"use client"
import { useGlobalContext } from '../Context';

const page = () => {
  const { isOpen } = useGlobalContext();
  return (
    <div className={`h-[85vh] w-[${isOpen ? "85vw" : "90vw"}] flex flex-col items-center justify-center bg-[#fbfafb] dark:bg-[#151929]`}>
        <h1 className="text-[4vw]">Profile-form</h1>
      </div>
  )
}

export default page