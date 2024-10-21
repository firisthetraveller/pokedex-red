const SectionWrapper = ({ children, name }) => {
    return (
        <div>
            <h2>{name}</h2>
            {children}
        </div>
    );
}

export default SectionWrapper;