import { createContext, useContext } from "react";
import Heading from "./Heading";

const LevelContext = createContext(1);

const SectionWrapper = ({ children, name, className = "" }) => {
    const level = useContext(LevelContext);

    const subSections = (
        <LevelContext.Provider value={level + 1}>
            {children}
        </LevelContext.Provider>
    );

    return (
        <>
            <div className={`px-2 my-2`}>
                <Heading level={level + 1} className="my-2">{name}</Heading>
                {className
                    ? <div className={className}>
                        {subSections}
                    </div>
                    : subSections
                }
            </div>
        </>
    );
}

export default SectionWrapper;