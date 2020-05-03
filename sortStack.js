const Stack = require('./stack')
const { display, peek, isEmpty } = require('./helperFunctions')

function sortStack(stack) {
    const newStack = new Stack

    while(!isEmpty(stack)){        
        if(isEmpty(newStack)){    
            newStack.push(stack.pop())
        }else if(peek(stack) <= peek(newStack)){ 
            newStack.push(stack.pop())
        }else if(peek(stack) > peek(newStack)){
            const tempVar = stack.pop();
            while(!isEmpty(newStack) && tempVar > peek(newStack)){    
                stack.push(newStack.pop())
            }
            newStack.push(tempVar)
        }    
    }
    return newStack
}

const stack = new Stack
stack.push(15)
stack.push(45)
stack.push(1)
stack.push(33)
stack.push(55)
stack.push(10)

console.log(display(sortStack(stack)))
