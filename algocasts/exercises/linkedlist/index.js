// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {}

class LinkedList {}

function reverseLinkedList(node){
    let prev = null;
    let nextNode = null;
    let currentNode = node;

    while (currentNode.next !== null){
        nextNode = currentNode.next;
        currentNode.next = prev;

        prev = currentNode;
        currentNode = nextNode;
    }

    return currentNode;
}

function remove(val){
    let temp  = this.head;

    while(temp.next !== null){
        if (temp.val === val){
            temp.val = temp.next.val;
            temp.next = temp.next.next;
            return temp.val;
        }

    }
    return -1;
}

module.exports = { Node, LinkedList, reverseLinkedList };
