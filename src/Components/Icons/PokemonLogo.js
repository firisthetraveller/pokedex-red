const PokemonLogo = () => {
    return (
        <svg width={48} height={48} xmlns="http://www.w3.org/2000/svg">
            <path d="M1 24 Q1 1 24 1 Q47 1 47 24 Z" fill="red" stroke="black" strokeWidth={2}/>
            <path d="M1 24 Q1 47 24 47 Q47 47 47 24 Z" fill="white" stroke="black" strokeWidth={2}/>
            {/* <circle cx={24} cy={24} r={22} fill="black" stroke="white" strokeWidth={3}/>*/}
            <line x1={0} x2={48} y1={24} y2={24} stroke="black" strokeWidth={3}/>
            <circle cx={24} cy={24} r={8} fill="white" stroke="black" strokeWidth={3}/>
        </svg>
    );
}
 
export default PokemonLogo;