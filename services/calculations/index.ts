export const PercentageCalculator = (newData: number, oldData: number) => {
    const percentage: number = ((newData - oldData) / oldData) * 100;
    return Math.round(percentage);
}

export const PercentageOfTotal = (per: number, total: number) => {
    const percentage: number = (per / total) * 100;
    return Math.round(percentage);
}