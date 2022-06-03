export const BigNumberFormat = (number: number) => {
    const format = new Intl.NumberFormat('en-US').format(number);
    const newFormat = format.replace(",", " ");
    return newFormat;
}