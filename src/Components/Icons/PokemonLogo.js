const PokemonLogo = () => {
    return (
        <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg">
            <circle cx={32} cy={32} r={30} fill="black" stroke="white" strokeWidth={3}/>
            <line x1={0} x2={64} y1={32} y2={32} stroke="white" strokeWidth={3}/>
            <circle cx={32} cy={32} r={10} fill="black" stroke="white" strokeWidth={3}/>
        </svg>
    );
}
 
export default PokemonLogo;