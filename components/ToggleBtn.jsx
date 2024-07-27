"use client"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState } from "react"

const ToggleBtn = ({ modeShiftBtn = true, lightIcon, darkIcon, text1, text2 }) => {
    const [toggle, setToggle] = useState(false)

    const { theme, setTheme } = useTheme();

    const clickHandler = () => {
        setToggle(!toggle)
        if (modeShiftBtn) {
            theme === "light" ? (setTheme("dark")) : (setTheme("light"))
        }
    }

    return (
        <div onClick={clickHandler} className={`flex h-6 w-12 md:h-8 md:w-16 cursor-pointers rounded-full border dark:border-gray-700 border-gray-400 items-center ${lightIcon && darkIcon || text1 && text2 != undefined ? "justify-around" : ""} p-[1px] transition-all ease-in duration-100 ${toggle ? "flex-row-reverse" : ""}`}>
            <motion.div
                className={`h-4 w-4 md:h-6 md:w-6 rounded-full ${toggle ? "bg-[#272e3f] dark:bg-gray-400" : "bg-gray-400 dark:bg-gray-700"}`}
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            />
            {!modeShiftBtn && text1 && text2 && (
                <div className={`font-medium text-sm md:text-lg ${toggle ? "text-[#272e3f] dark:text-gray-400" : "text-gray-400 dark:text-gray-700"}`}>{toggle ? text1 : text2}</div>
            )}
            {modeShiftBtn && lightIcon && darkIcon && (
                <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>{theme === "dark" ? lightIcon : darkIcon}</div>
            )}
        </div>
    )
}

export default ToggleBtn