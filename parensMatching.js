const Stack = require('./stack')

function parensMatching(s) {
    let parensStack = new Stack

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            parensStack.push(s[i])
        } 
        else if(s[i] === ")") {
            try {
                parensStack.pop()
            } 
            catch(error) {
                return "You're missing a ("
            }
        }
    }

    if(parensStack.top !== null) {
        return "You're missing a )"
    }

    return "Matching parenthesis"
}

console.log(parensMatching("(i + 5)"))
console.log(parensMatching("(i + 5"))
console.log(parensMatching("i + 5)"))
console.log(parensMatching("(a(3) (i + 5)"))

