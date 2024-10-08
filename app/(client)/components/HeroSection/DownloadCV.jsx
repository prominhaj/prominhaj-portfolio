"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const DownloadCV = () => {
    return (
        <form action="">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center space-x-2 text-sm font-semibold text-black bg-white dark:bg-black dark:text-white"
            >
                <span>Download CV</span>
            </HoverBorderGradient>
        </form>
    );
};

export default DownloadCV;