"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Feb",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Apr",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "May",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Jul",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Aug",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Sep",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Oct",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Nov",
        total: Math.floor(Math.random() * 5000) + 1000
    },
    {
        name: "Dec",
        total: Math.floor(Math.random() * 5000) + 1000
    }
];

export const BarGraph = () => {
    const { resolvedTheme } = useTheme();
    const [barFill, setBarFill] = useState("#8884d8"); // default color

    useEffect(() => {
        if (resolvedTheme === "dark") {
            setBarFill("#ffff");
        } else {
            setBarFill("#000");
        }
    }, [resolvedTheme]);
    return (
        <ResponsiveContainer width={"100%"} height={450}>
            <BarChart data={data}>
                <XAxis
                    dataKey={"name"}
                    tickLine={false}
                    axisLine={true}
                    stroke="#888888"
                    fontSize={12}
                />
                <YAxis
                    tickLine={false}
                    axisLine={true}
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => `$${value}`}
                />
                <Bar
                    dataKey={"total"}
                    radius={[6, 6, 0, 0]}
                    fill={barFill}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}
