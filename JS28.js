
var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let str1 = s.split('').sort().join('');
    let str2 = t.split('').sort().join('');

    return str1 === str2;
};

// Test cases
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
