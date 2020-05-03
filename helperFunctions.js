function peek(stack) {
    if(stack.top === null) {
        return "Empty stack"
    }

    return stack.top.data
}

function isEmpty(stack) {
    if(stack.top === null) {
        return true
    } else {
        return false
    }
}

function display(stack) {
    let stackArray = []

    if(stack.top === null) {
        return "Empty stack"
    }

    let currNode = stack.top

    do {
        stackArray.push(currNode.data)
        currNode = currNode.next
    } while(currNode.next !== null)

    stackArray.push(currNode.data)

    return stackArray
}

module.exports = {
    peek,
    isEmpty,
    display
}