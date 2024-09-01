import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

import projectImg from "@/assets/best-project.png";
import IframeEmbed from "@/components/globals/IframeEmbed/IframeEmbed";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const BestProjectSection = () => {
    return (
        <div>
            <div className="container mx-auto overflow-hidden">
                <MacbookScroll
                    title={
                        <span>
                            This Macbook is built with Tailwindcss. <br /> No kidding.
                        </span>
                    }
                    showGradient={true}
                >
                    <IframeEmbed
                        src="https://lpe.prominhaj.store"
                        title="LPE Pro Minhaj Store"
                        width="100%"
                        height="100%"
                    />
                </MacbookScroll>

            </div>
        </div>
    );
};

export default BestProjectSection;