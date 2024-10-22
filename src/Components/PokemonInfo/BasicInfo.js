import SectionWrapper from "./SectionWrapper";

const BasicInfo = ({name, value}) => {
    return (
        <SectionWrapper name={name}>
            {value}
        </SectionWrapper>
    );
}
 
export default BasicInfo;