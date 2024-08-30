"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import myPhoto from '@/assets/my-photo.png';
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";

const HeroSection = () => {
    return (
        <div>
            <HeroHighlight className="container mx-auto">
                <div className="flex flex-col-reverse items-center justify-center gap-5 md:gap-10 md:flex-row">
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
                        className="px-4 mx-auto text-3xl font-bold leading-snug text-center sm:text-4xl md:leading-relaxed lg:text-5xl text-neutral-700 dark:text-white lg:leading-snug"
                    >
                        I am a Web Full Stack Developer <br className="hidden md:block" /> and I mostly work with <br />
                        <Highlight className="text-black dark:text-white">
                            like Next JS.
                        </Highlight>
                    </motion.h1>
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full opacity-75 bg-gradient-to-br from-green-400 to-blue-500 dark:from-purple-600 dark:to-pink-500 blur-lg"></div>
                        <Image
                            className="relative object-cover p-1.5 rounded-full ring-4 ring-green-500 dark:ring-purple-500 max-w-[12rem] max-h-[12rem] sm:max-h-[13.75rem] sm:max-w-[13.75rem] md:max-w-[300px] md:max-h-[300px] bg-gray-100 dark:bg-gray-900"
                            src={myPhoto}
                            width={300}
                            height={300}
                            priority
                            alt="my-photo"
                        />
                    </div>
                </div>
            </HeroHighlight>
        </div>
    );
};

export default HeroSection;