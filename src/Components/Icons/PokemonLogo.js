import './Animations.css';

const PokemonLogo = ({spinning = false}) => {
    return (
        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" className={spinning ? 'spinning' : ''}>
            <circle cx="24" cy="24" r="22" fill="red" stroke="black" strokeWidth="2" />
            <path d="M 2 24 A 22 22 0 0 0 46 24 Z" fill="white" stroke="black" strokeWidth="2" />
            <line x1="1" y1="24" x2="47" y2="24" stroke="black" strokeWidth="3" />
            <circle cx="24" cy="24" r="8" fill="white" stroke="black" strokeWidth="3" />
        </svg>
    );
}

export default PokemonLogo;