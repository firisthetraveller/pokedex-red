import Heading from "../Base/Heading";

const SectionWrapper = ({ children, name }) => {
    return (
        <div>
            <Heading level={2}>{name}</Heading>
            {children}
        </div>
    );
}

export default SectionWrapper;