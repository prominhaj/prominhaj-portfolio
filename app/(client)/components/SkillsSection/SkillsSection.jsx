import SectionHeading from "@/components/globals/SectionHeading/SectionHeading";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
    {
        title: "Next JS",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "React",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "JavaScript",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Node JS",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Express JS",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "MongoDB",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];

const SkillsSection = () => {
    return (
        <div className="bg-white dark:bg-black">
            <div className="container py-8 mx-auto">
                <SectionHeading className="mb-3">Skills</SectionHeading>
                <HoverEffect items={projects} />
            </div>
        </div>
    );
};

export default SkillsSection;