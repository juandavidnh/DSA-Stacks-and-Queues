function peek(queue) {
    if(queue.first === null) {
        return "Empty queue"
    }

    return queue.first.value
}

function isEmpty(queue) {
    if(queue.first === null) {
        return true
    }
    else{
        return false
    }
}

function display(queue) {
    let queueArray = []

    if(queue.first === null) {
        return "Empty queue"
    }

    let currNode = queue.first

    do {
        queueArray.push(currNode.value)
        currNode = currNode.next
    } while(currNode.next !== null)

    queueArray.push(currNode.value)

    return queueArray
}

module.exports = {
    peek,
    isEmpty,
    display
}
