import SectionHeading from '@/components/globals/SectionHeading/SectionHeading';

const BestProjectsSection = () => {
    return (
        <div className='py-5 md:py-10'>
            {/* Background Gradient */}
            <div class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            <div className='container'>
                <SectionHeading>
                    Best Projects
                </SectionHeading>

                {/* Project Cards */}
            </div>
        </div>
    );
};

export default BestProjectsSection;