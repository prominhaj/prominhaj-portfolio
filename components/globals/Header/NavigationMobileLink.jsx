"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationMobileLink = ({ item }) => {
    const pathname = usePathname();

    const isActive = pathname === item.href;

    return (
        <Link
            href={item.href}
            className={cn(
                "flex items-center w-full py-2 px-3 gap-x-2 text-slate-500 dark:text-slate-300 text-base font-[500] transition-all hover:text-slate-600 relative dark:hover:bg-slate-500/20 hover:bg-slate-300/20",
                isActive &&
                "text-emerald-600 bg-emerald-200/20 hover:bg-emerald-200/20 hover:text-emerald-600"
            )}
        >
            {item?.label}
            <span
                className={cn(
                    "ml-auto opacity-0 border-2 absolute right-0 border-emerald-600 dark:border-emerald-500 h-full transition-all",
                    isActive && "opacity-100"
                )}
            />
        </Link>
    );
};

export default NavigationMobileLink;