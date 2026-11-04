
var isAnagram = function(s, t) {

    // Step 1: Check lengths
    if (s.length !== t.length) {
        return false;
    }

    // Step 2: Create frequency array
    let freq = new Array(26).fill(0);

    // Step 3: Count characters in s
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }

    // Step 4: Decrease counts using t
    for (let i = 0; i < t.length; i++) {
        freq[t.charCodeAt(i) - 97]--;

        if (freq[t.charCodeAt(i) - 97] < 0) {
            return false;
        }
    }

    return true;
};

// Test cases
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("listen", "silent"));
