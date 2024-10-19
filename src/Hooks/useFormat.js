const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);;
}

const capitalizeAllString = (str) => {
    if (str) {
        return str.split("-").map(s => capitalize(s)).join(" ");
    }
    return undefined;
}

export default function useFormat() {
    return { capitalize, capitalizeAllString };
}
