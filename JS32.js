let num = 153;
let original = num;
let temp = num;

let digits = 0;
let sum = 0;

// Count digits
while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
}

// Calculate Armstrong sum
temp = num;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
}

// Check result
if (sum === original) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}
