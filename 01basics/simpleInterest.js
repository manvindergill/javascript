// Simple Interest Calculator with Discount for Short-term Loans

const principal = 10000;  // Principal amount
const rate = 10;          // Interest rate (%)
const time = 0.5;         // Time in years (0.5 = 6 months)

// Calculate simple interest
const simpleInterest = (principal * rate * time) / 100;

console.log("Principal: $" + principal);
console.log("Rate: " + rate + "%");
console.log("Time: " + time + " years");
console.log("Simple Interest: $" + simpleInterest);

// Apply discount for short-term loans
if(time < 1) {
    const discount = simpleInterest * 0.2;  // 20% discount
    const finalInterest = simpleInterest - discount;
    
    console.log("Short-term loan discount (20%): -$" + discount);
    console.log("Final Interest after discount: $" + finalInterest);
    console.log("Total Amount to pay: $" + (principal + finalInterest));
} else {
    console.log("No discount applied (loan term >= 1 year)");
    console.log("Total Amount to pay: $" + (principal + simpleInterest));
}