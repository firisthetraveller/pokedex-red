import SectionWrapper from "../Base/SectionWrapper";

const BasicInfo = ({name, value, className = ""}) => {
    return (
        <SectionWrapper name={name} className={className}>
            {value}
        </SectionWrapper>
    );
}
 
export default BasicInfo;