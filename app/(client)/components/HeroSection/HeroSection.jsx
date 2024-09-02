"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import myPhoto from '@/assets/my-photo.png';
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";
import DownloadCV from "./DownloadCV";
// Background Image
import lightBg from "@/assets/Background/light-bg.jpg";
import darkBg from "@/assets/Background/dark-bg.jpg";
import PrimaryButton from "@/components/globals/Button/PrimaryButton";


const HeroSection = () => {
    return (
        <div>
            <HeroHighlight className="container mx-auto">
                <div className="flex flex-col-reverse items-center justify-between gap-5 md:gap-10 md:flex-row">
                    <div className="flex flex-col items-center gap-3">
                        <Meteors className="hidden md:block" number={20} />
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: [20, -5, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.4, 0.0, 0.2, 1],
                            }}
                            className="px-4 mx-auto text-3xl font-bold leading-snug text-center text-transparent sm:text-4xl md:leading-relaxed lg:text-5xl lg:leading-snug bg-clip-text bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-300 from-neutral-900 to-neutral-700"
                        >
                            I am a Web Full Stack Developer <br className="hidden md:block" /> and I mostly work with <br />
                            <Highlight className="text-black dark:text-white">
                                like Next JS.
                            </Highlight>
                        </motion.h1>
                        <div className="flex items-center gap-3 mt-2">
                            <DownloadCV />
                            <PrimaryButton href="/hire-me" link={true} className="!py-1.5 text-sm">
                                <span>Hire Me →</span>
                                <div className="absolute inset-x-0 w-3/4 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                            </PrimaryButton>
                        </div>
                    </div>
                    <div
                        className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-[1px] transition-all duration-300 hover:from-blue-600 hover:to-purple-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 tracking-wider max-w-[12rem] max-h-[12rem] sm:max-h-[13.75rem] sm:max-w-[13.75rem] md:max-w-[300px] md:max-h-[300px] rounded-full overflow-x-clip"
                    >
                        <span className="absolute inset-0 flex items-center justify-center rounded-full">
                            <span className="animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg_80deg,white_80deg_180deg,transparent_180deg_360deg)] h-full w-full rounded-xl" />
                        </span>
                        <div className="relative rounded-full">
                            {/* Light BG */}
                            <Image className="absolute top-0 bottom-0 left-0 right-0 block w-full h-full rounded-full dark:hidden" src={lightBg} width={300} height={300} alt="light-bg" />
                            {/* Dark BG */}
                            <Image className="absolute top-0 bottom-0 left-0 right-0 hidden w-full h-full rounded-full dark:block" src={darkBg} width={300} height={300} alt="dark-bg" />
                            <Image
                                className="object-cover w-full h-full rounded-full brightness-90 drop-shadow-lg"
                                src={myPhoto}
                                width={300}
                                height={300}
                                priority
                                alt="my-photo"
                            />
                        </div>
                    </div>
                </div>
            </HeroHighlight>
        </div>
    );
};

export default HeroSection;