import { cn } from "@/lib/utils";

const SectionHeading = ({ children, className }) => {
    return (
        <h1 className={cn(className, "text-3xl md:text-4xl font-bold tracking-tight text-black scroll-m-20 dark:text-white")}>{children}</h1>
    );
};

export default SectionHeading;