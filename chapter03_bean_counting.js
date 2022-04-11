// countBs counts how many uppercase B there are in the string
function countBs(text) {
    let charCount = 0
    // Iterate over each character in text
    for (const letter in text) {
        // Add 1 when 'B' is found
        if (text[letter] === 'B') charCount++
    }
    return charCount
}

// countChar counts how many specific characters there are in the string
function countChar(text, character) {
    let charCount = 0
    // Iterate over each character in text
    for (const letter in text) {
        // Add 1 when character is found
        if (text[letter] === character) charCount++
    }
    return charCount
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4