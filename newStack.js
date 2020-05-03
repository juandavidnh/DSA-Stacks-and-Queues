const Stack = require('./stack')
const { peek, isEmpty, display } = require('./helperFunctions')

let starTrek = new Stack

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

starTrek.pop()
starTrek.pop()
starTrek.push('Scotty')

console.log(display(starTrek))

