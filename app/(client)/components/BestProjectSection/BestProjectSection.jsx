import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

import projectImg from "@/assets/best-project.png";
import IframeEmbed from "@/components/globals/IframeEmbed/IframeEmbed";

const BestProjectSection = () => {
    return (
        <div>
            <div className="container flex flex-col mx-auto overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Unleash the power of <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Scroll Animations
                                </span>
                            </h1>
                        </>
                    }
                >
                    {/* <IframeEmbed
                        src="https://lpe.prominhaj.store"
                        title="LPE Pro Minhaj Store"
                        width="100%"
                        height="100%"
                    /> */}
                </ContainerScroll>
            </div>
        </div>
    );
};

export default BestProjectSection;