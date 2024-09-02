"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"


export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}) {
    const [hovered, setHovered] = useState(false)
    const [direction, setDirection] = useState("TOP")

    const rotateDirection = (currentDirection) => {
        const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"]
        const currentIndex = directions.indexOf(currentDirection)
        const nextIndex = clockwise
            ? (currentIndex - 1 + directions.length) % directions.length
            : (currentIndex + 1) % directions.length
        return directions[nextIndex]
    }

    const movingMap = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
        BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
        RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
    }

    const highlight = "radial-gradient(75% 181.16% at 50% 50%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)"

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState))
            }, duration * 1000)
            return () => clearInterval(interval)
        }
    }, [hovered, duration])

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex rounded-full border content-center items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit transition duration-500",
                "bg-black/20 hover:bg-black/10 dark:bg-white/20 dark:hover:bg-white/10",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-auto z-10 px-4 py-1.5 rounded-[inherit]",
                    "bg-white text-black dark:bg-black dark:text-white",
                    className
                )}
            >
                {children}
            </div>
            <motion.div
                className={cn(
                    "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]",
                    "from-black to-transparent dark:from-white dark:to-transparent"
                )}
                style={{
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ ease: "linear", duration: duration }}
            />
            <div
                className={cn(
                    "absolute z-1 flex-none inset-[2px] rounded-[100px]",
                    "bg-white dark:bg-black"
                )}
            />
        </Tag>
    )
}