const exceptions = new Map([['nidoran-m', 'Nidoran ♂'], ['nidoran-f', 'Nidoran ♀'], ['xd', 'XD']]);

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

export default function useFormat() {
    return { capitalize, capitalizeAllString, shorthandString };
}
