import { createContext, useContext } from "react";
import Heading from "../Base/Heading";

const LevelContext = createContext(1);

const SectionWrapper = ({ children, name }) => {
    const level = useContext(LevelContext);

    return (
        <div className="my-2">
            <Heading level={level + 1}>{name}</Heading>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </div>
    );
}

export default SectionWrapper;