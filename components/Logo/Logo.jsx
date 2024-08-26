import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link className="block max-w-12 max-h-[2.8rem]" href="/">
            <Image className="w-full h-full" src={logo} width={48} height={48} priority alt="logo" />
        </Link>
    );
};

export default Logo;