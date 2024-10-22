import SectionWrapper from "../Base/SectionWrapper";

const BasicInfo = ({name, value}) => {
    return (
        <SectionWrapper name={name}>
            {value}
        </SectionWrapper>
    );
}
 
export default BasicInfo;