import IframeEmbed from "../IframeEmbed/IframeEmbed";
import { Card, } from "@/components/ui/card";
import MagicButton from "../Button/MagicButton";

const ProjectCard = ({ project }) => {
    return (
        <>
            <Card
                className="w-full border-4 border-gray-400 dark:border-gray-600 p-2 md:p-6 bg-zinc-100 dark:bg-zinc-900 rounded-[30px] shadow-2xl"
            >
                <div className="flex flex-wrap items-center justify-between gap-3 px-2 mb-3">
                    <h2 className="text-lg font-bold md:text-xl text-neutral-600 dark:text-white">
                        Learn Pulse Edu
                    </h2>
                    <MagicButton href="https://lpe.prominhaj.store" link={true} containerClass="!h-8" className="!h-8">
                        Live View
                    </MagicButton>
                </div>
                <IframeEmbed className="w-full h-[30rem] md:h-[40rem]" title="Learn Pulse Edu" src="https://lpe.prominhaj.store" />
            </Card>
        </>
    );
};

export default ProjectCard;