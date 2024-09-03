import { cn } from "@/lib/utils";

const IframeEmbed = ({ src, title, width, height, className, props }) => {
    return (
        <iframe
            src={src}
            title={title}
            width={width || "100%"}
            height={height || "100%"}
            draggable={true}
            style={{ border: 'none' }}
            className={cn(className)}
            {...props}
        ></iframe>
    );
};

export default IframeEmbed;
