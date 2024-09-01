
const IframeEmbed = ({ src, title, width, height }) => {
    return (
        <iframe
            src={src}
            title={title}
            width={width}
            height={height}
            draggable={true}
            style={{ border: 'none' }}
        ></iframe>
    );
};

export default IframeEmbed;
