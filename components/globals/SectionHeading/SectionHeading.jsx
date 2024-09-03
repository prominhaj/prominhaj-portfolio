import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";

const SectionHeading = ({ children, className }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full overflow-hidden rounded-md">
            <h1 className={cn(className, "relative z-20 text-2xl font-bold text-center text-black dark:text-white md:text-3xl font-inter lg:text-4xl")}>
                {children}
            </h1>
            <div className="w-[40rem] max-w-full h-4 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-400 dark:via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r via-indigo-400 from-transparent dark:via-indigo-500 to-transparent" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-400 dark:via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-400 dark:via-sky-500 to-transparent" />
                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                />


                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
};

export default SectionHeading;