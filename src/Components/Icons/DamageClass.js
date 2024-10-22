const PhysicalClass = () => {
    return (
        <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(5,0) skewX(-20)">
                {/** Fingers */}
                <rect x="2" y="2" width="4" height="8" fill="white" rx={2} ry={2} stroke="black" />
                <rect x="6" y="2" width="4" height="8" fill="white" rx={2} ry={2} stroke="black" />
                <rect x="10" y="2" width="4" height="8" fill="white" rx={2} ry={2} stroke="black" />
                <rect x="14" y="2" width="4" height="8" fill="white" rx={2} ry={2} stroke="black" />

                {/** Palm */}
                <rect x="2" y="10" width="16" height="8" fill="white" rx={2} ry={2} stroke="black" />

                {/** Thumb */}
                <rect x="10" y="10" width="8" height="4" fill="white" rx={2} ry={2} stroke="black" />
            </g>
        </svg>
    )
}

const SpecialClass = () => {
    return (
        <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(5,0) skewX(-20)">
                <circle cx="10" cy="10" r="8" fill="none" stroke="black" />
                <circle cx="10" cy="10" r="4" fill="none" stroke="black" />
            </g>
        </svg>
    );
}

const StatusClass = () => {
    return (
        <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(5,0) skewX(-20)">
                <circle cx="10" cy="10" r="9" fill="none" stroke="black" />
                <circle cx="10" cy="6" r="2" fill="black" stroke="black" />
                <circle cx="10" cy="14" r="2" fill="white" stroke="black" />
            </g>
        </svg>
    );
}

const DamageClass = ({ name }) => {
    switch (name) {
        case "physical": return <PhysicalClass size={20} />;
        case "special": return <SpecialClass size={20} />;
        case "status": return <StatusClass size={20} />;
        default: throw new Error(`No such damage class: ${name}`);
    }
}

export default DamageClass;