const commonStyle = ""

const Heading = ({ level, className, children }) => {
    switch (level) {
        case 1: return <h1 className={`${commonStyle} ${className} font-bold text-2xl my-2`}>{children}</h1>;
        case 2: return <h2 className={`${commonStyle} ${className} font-semibold text-lg my-1`}>{children}</h2>;
        case 3: return <h3 className={`${commonStyle} ${className} font-semibold text-base`}>{children}</h3>;
        default: return <p>{children}</p>
    }
}

export default Heading;