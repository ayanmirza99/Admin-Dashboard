"use client"
import { CardContent } from "@/components/Card"
import PageTitle from "@/components/PageTitle"
import ToggleBtn from "@/components/ToggleBtn"
import { Moon, Sun } from "lucide-react"

const page = () => {
  return (
    <div className='flex flex-col gap-5 pt-2 md:pl-4'>
      <PageTitle title={"Settings"} />
      <CardContent>
        <div className="flex justify-between items-center text-lg py-2 px-2 md:px-6">
          <h2 className="font-semibold">Account Name</h2>
          <h2 className="text-gray-500">Ayan Mirza</h2>
        </div>
        <div className="flex justify-between items-center text-lg py-2 px-2 md:px-6">
          <h2 className="font-semibold">Country</h2>
          <h2 className="text-gray-500">Pakistan</h2>
        </div>
        <div className="flex justify-between items-center text-lg py-2 px-2 md:px-6">
          <h2 className="font-semibold">Notifications</h2>
          <ToggleBtn modeShiftBtn={false}
            text1={"On"}
            text2={"Off"} />
        </div>
        <div className="flex justify-between items-center text-lg py-2 px-2 md:px-6">
          <h2 className="font-semibold">Theme</h2>
          <ToggleBtn modeShiftBtn={true}
            lightIcon={<Sun className="size-4 md:size-6" />}
            darkIcon={<Moon className="size-4 md:size-6"/>} />
        </div>
      </CardContent>
    </div>
  )
}

export default page