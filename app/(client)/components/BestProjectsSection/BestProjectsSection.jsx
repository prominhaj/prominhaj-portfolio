import ProjectCard from '@/components/globals/ProjectCard/ProjectCard';
import SectionHeading from '@/components/globals/SectionHeading/SectionHeading';

// Feck Best Project Items 
const bestProjects = [
    {
        id: 1,
        name: "Learn Pulse Edu",
        description: "A platform to help students learn and grow",
        link: "https://lpe.prominhaj.store",
        githubLink: "",
        image: "https://via.placeholder.com/300x200",
    }
]

const BestProjectsSection = () => {
    return (
        <div className='relative py-5 md:py-10'>
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            <div className='container'>
                <SectionHeading>
                    Best Projects
                </SectionHeading>

                {/* Project Cards */}
                <div className='pt-6 md:pt-10'>
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
};

export default BestProjectsSection;