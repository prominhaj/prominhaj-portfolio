import { cn } from "@/lib/utils";
import Link from "next/link";

const PrimaryButton = ({ children, link, containerClass, className, href, props }) => {
    return (
        <>
            {
                link ? (
                    <Link href={href} {...props} className={cn(containerClass, "relative inline-block p-px text-xs font-semibold leading-6 text-black no-underline rounded-full shadow-2xl cursor-pointer dark:text-white bg-slate-200 dark:bg-slate-800 group shadow-zinc-100 dark:shadow-zinc-900")}>
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className={cn(className, "relative z-10 flex items-center px-4 py-0.5 space-x-2 rounded-full bg-zinc-50 dark:bg-zinc-950 ring-1 ring-black/10 dark:ring-white/10")}>
                            <span>
                                {children}
                            </span>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </Link>
                ) : (
                    <button {...props} className={cn(containerClass, "relative inline-block p-px text-xs font-semibold leading-6 text-black no-underline rounded-full shadow-2xl cursor-pointer dark:text-white bg-slate-200 dark:bg-slate-800 group shadow-zinc-100 dark:shadow-zinc-900")}>
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className={cn(className, "relative flex space-x-2 items-center z-10 rounded-full bg-zinc-50 dark:bg-zinc-950 py-0.5 px-4 ring-1 ring-black/10 dark:ring-white/10")}>
                            <span>
                                {children}
                            </span>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                )
            }
        </>
    );
};

export default PrimaryButton;