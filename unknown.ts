function calculateTax(income: number): number {
    if (income < 50_000) {
        return income * 1.2;
    }
    return income * 1.3;
} 

console.log(calculateTax(75_000))