export const BigNumberFormat = (number: number) => {
    if (number >= 10000) {
        return `${(number / 1000).toFixed(0)}k`;
    }
    const format = new Intl.NumberFormat('en-US').format(number);
    const newFormat = format.replace(",", " ");
    return newFormat;
}

// export const truncateString = (str: string, num: number) => {
//     if (str.length <= num) {
//         return str
//     }

//     return str.slice(0, num) + "..."
// }