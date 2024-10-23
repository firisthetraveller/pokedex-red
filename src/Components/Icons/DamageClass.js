const commonStyles = 'max-w-8 max-h-6';

const DamageClass = ({ name }) => {
    switch (name) {
        case "physical": return <img className={commonStyles} src="https://archives.bulbagarden.net/media/upload/a/a4/Physical_icon_HOME.png" alt="Physical icon"/>;;
        case "special": return <img className={commonStyles} src="https://archives.bulbagarden.net/media/upload/c/c4/Special_icon_HOME.png" alt="Special icon"/>;
        case "status": return <img className={commonStyles} src="https://archives.bulbagarden.net/media/upload/3/34/Status_icon_HOME.png" alt="Status icon"/>;
        default: throw new Error(`No such damage class: ${name}`);
    }
}

export default DamageClass;