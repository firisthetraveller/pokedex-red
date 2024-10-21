const PokemonLogo = () => {
    return (
        <svg width={48} height={48} xmlns="http://www.w3.org/2000/svg">
            <circle cx={24} cy={24} r={22} fill="black" stroke="white" strokeWidth={3}/>
            <line x1={0} x2={48} y1={24} y2={24} stroke="white" strokeWidth={3}/>
            <circle cx={24} cy={24} r={8} fill="black" stroke="white" strokeWidth={3}/>
        </svg>
    );
}
 
export default PokemonLogo;