"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const TopLoaderWithTheme = () => {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#000");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#fff" : "#000");
    }, [resolvedTheme]);

    return <NextTopLoader color={color} initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} showSpinner={false} />;
};

export default TopLoaderWithTheme;