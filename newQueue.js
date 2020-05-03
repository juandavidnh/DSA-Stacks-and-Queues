const Queue = require('./queue')
const { peek, isEmpty, display } = require('./helperFunctionsQ')

let starTrekQ = new Queue 

starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

console.log(peek(starTrekQ))
console.log(isEmpty(starTrekQ))
console.log(display(starTrekQ))

starTrekQ.dequeue()
starTrekQ.dequeue()

console.log(display(starTrekQ))

