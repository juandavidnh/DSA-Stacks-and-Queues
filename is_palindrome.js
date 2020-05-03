const Stack = require('./stack')

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    let stringArray = s.split("")

    let origString = new Stack

    for(let i = 0; i < s.length; i++) {
        origString.push(s[i])
    }

    let palindrome = []

    for(let i = 0; i < s.length; i++) {
        palindrome.push(origString.pop())
    }

    stringArray = stringArray.join("")
    palindrome = palindrome.join("")

    return stringArray === palindrome
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));