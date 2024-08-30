"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ item }) => {
    const pathname = usePathname();
    return (
        <Link
            className={cn(pathname === item.href ? "font-semibold opacity-100" : "opacity-85", "text-sm text-gray-900  dark:text-gray-100")}
            href={item.href}
        >
            {item.label}
        </Link>
    );
};

export default NavigationLink;