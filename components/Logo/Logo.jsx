import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link className="block max-w-10 max-h-9" href="/">
            <Image
                className="w-full h-full filter dark:invert dark:brightness-0"
                src={logo}
                width={40}
                height={40}
                priority
                alt="logo"
            />
        </Link>
    );
};

export default Logo;