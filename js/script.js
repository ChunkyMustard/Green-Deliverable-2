let vacationType;
let groupSize;
let destination;
let travelSuggestions;
let result;

do {
   vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?").toLowerCase();
} while (vacationType !== "musical" && vacationType !== "tropical" && vacationType !== "adventurous")

do {
   groupSize = prompt("How many are in your group?");
} while (isNaN(groupSize) || groupSize === "" || groupSize <= 0)

if (vacationType === "musical") {
   destination = "New Orleans.";
} else if(vacationType === "tropical") {
   destination = "a beach in Mexico.";
} else if(vacationType === "adventurous") {
   destination = "go white water rafting in the Grand Canyon.";
}

if (groupSize == 1 || groupSize == 2) {
    travelSuggestions = "first class flight";
} else if(groupSize == 3 || groupSize == 4 || groupSize == 5) {
    travelSuggestions = "helicopter";
} else if(groupSize >= 6) {
    travelSuggestions = "charter flight";
}

result = ("Since you’re a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + travelSuggestions + " to " + destination).toString();
console.log(result);