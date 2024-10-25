const exceptions = new Map([
    ['nidoran-m', 'Nidoran ♂'],
    ['nidoran-f', 'Nidoran ♀'],
    ['xd', 'XD'],
    ['ho-oh', 'Ho-oh'],
    ['porygon-z', 'Porygon-Z'],
    ['jangmo-o', 'Jangmo-o'],
    ['hakamo-o', 'Hakamo-o'],
    ['kommo-o', 'Kommo-o'],
    ['wo-chien', 'Wo-Chien'],
    ['chien-pao', 'Chien-Pao'],
    ['ting-lu', 'Ting-Lu'],
    ['chi-yu', 'Chi-Yu']
]);

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);;
}

const capitalizeAllString = (str) => {
    if (str) {
        if (exceptions.get(str))
            return exceptions.get(str);
        return str.split("-").map(s => capitalize(s)).join(" ");
    }
    return undefined;
}

const shorthandString = (str) => {
    if (str) {
        if (exceptions.get(str))
            return exceptions.get(str);
        return str.split("-").map(s => capitalize(s).slice(0, 1)).join("");
    }
    return undefined;
}

/**
 * Converts a given string to kebab case: all lowercase letters and all words are joined by a dash (`-`).
 * @param {string} str 
 * @returns str in kebab case.
 */
const kebabCase = (str) => {
    if (str) {
        return str.toLowerCase().replace(' ', '-');
    }
}

export default function useFormat() {
    return { capitalize, capitalizeAllString, shorthandString, kebabCase };
}
