// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.head = null;
        this.tail = this.head;
    }

    add (val) {
        if (!this.head){
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            let tempNode = new Node(val);
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
    }

    remove (){
        if (!this.head){
            return undefined;
        } else {
            let temp = this.head.val;
            this.head = this.head.next;
            return temp;
        }
    }
}

module.exports = Queue;
