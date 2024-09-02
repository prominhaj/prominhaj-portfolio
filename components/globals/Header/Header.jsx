import Logo from "@/components/Logo/Logo";
import NavigationLink from "./NavigationLink";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavigationMobileLink from "./NavigationMobileLink";
import { IconBrandGithub } from "@tabler/icons-react";
import MagicButton from "../Button/MagicButton";

// Navigation Likes
const navigationItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Services',
        href: '/services',
    },
    {
        label: 'Contact',
        href: '/contact',
    }
]

const Header = () => {
    return (
        <nav className='container flex items-center justify-between py-2'>
            <div className="flex items-center gap-3 sm:gap-5">
                <Logo />
                <div className="hidden sm:block">
                    <div className="flex items-center gap-4">
                        {
                            navigationItems.map((item, index) => (
                                <NavigationLink key={index} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className="hidden sm:block">
                    <MagicButton
                        link={true}
                        href='/login'
                        containerClass="!h-8"
                        className="!py-0.5"
                    >
                        Login
                    </MagicButton>
                </div>
                <div className="flex items-center gap-0.5">
                    <Link
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "p-2 border-0")}
                        target="_blank"
                        href="https://github.com/prominhaj"
                    >
                        <IconBrandGithub className="w-[22px] h-[22px]" />
                    </Link>
                    <ThemeSwitch />
                    {/* Mobile Responsive */}
                    <div className="block sm:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <div className="flex flex-col items-start w-full gap-1 py-8">
                                    {
                                        navigationItems.map((item, index) => (
                                            <NavigationMobileLink key={index} item={item} />
                                        ))
                                    }
                                    <MagicButton
                                        link={true}
                                        href='/login'
                                        containerClass="!h-8 w-full mt-2"
                                        className="!py-0.5"
                                    >
                                        Login
                                    </MagicButton>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;