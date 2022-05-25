export const PercentageCalculator = (newData: number, oldData: number) => {
    const percentage: number = ((newData - oldData) / oldData) * 100;
    return Math.round(percentage);
}