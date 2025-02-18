// Get user input
let litresUsed = Number(prompt("Enter the number of litres of water used:"));
let isIndigent = prompt("Are you an indigent household? (yes/no):").toLowerCase() === "yes";

// Define rates and limits
const TIER1_RATE = 15.73; // Rate for the first 6000 litres
const TIER2_RATE = 22.38; // Rate for usage above 6000 litres and up to 10500 litres
const TIER3_RATE = 31.77; // Rate for usage above 10500 litres and up to 35000 litres
const TIER4_RATE = 69.76; // Rate for usage above 35000 litres

// Calculate the water bill
let totalCost = 0;

if (isIndigent) {
    // Indigent households get the first 10500 litres for free
    if (litresUsed > 10500) {
        // For usage above 10500 litres, calculate the cost for tiers 3 and 4
        if (litresUsed <= 35000) {
            totalCost = ((litresUsed - 10500) / 1000) * TIER3_RATE;
        } else {
            totalCost = ((35000 - 10500) / 1000) * TIER3_RATE + 
                        ((litresUsed - 35000) / 1000) * TIER4_RATE;
        }
    }
} else {
    // Regular households pay based on usage
    if (litresUsed <= 6000) {
        // TIER1
        totalCost = (litresUsed / 1000) * TIER1_RATE;
    } else if (litresUsed <= 10500) {
        // TIER1 + TIER2
        totalCost = ((6000 / 1000) * TIER1_RATE) + 
                    ((litresUsed - 6000) / 1000) * TIER2_RATE;
    } else if (litresUsed <= 35000) {
        // TIER1 + TIER2 + TIER3
        totalCost = ((6000 / 1000) * TIER1_RATE) + 
                    ((10500 - 6000) / 1000) * TIER2_RATE + 
                    ((litresUsed - 10500) / 1000) * TIER3_RATE;
    } else {
        // TIER1 + TIER2 + TIER3 + TIER4
        totalCost = ((6000 / 1000) * TIER1_RATE) + 
                    ((10500 - 6000) / 1000) * TIER2_RATE + 
                    ((35000 - 10500) / 1000) * TIER3_RATE + 
                    ((litresUsed - 35000) / 1000) * TIER4_RATE;
    }
}

// Display the result on the page
console.log(`Total bill: R${totalCost.toFixed(2)}`);
document.body.innerHTML = `<h1>Total water bill: R${totalCost.toFixed(2)}</h1>`;