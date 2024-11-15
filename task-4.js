// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Examples
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) ➞ []
// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.

function jazzify(arr) {
for (let i = 0; i < arr.length; i++) {
    if (!arr[i].endsWith("7")) {
        arr[i] += "7";
    }
}
return arr;
}

console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));