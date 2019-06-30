// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(value, next){
        this.data = value,
        this.next = next || null,
        this.previous = null
    };
};

class LinkedList {
    constructor(){
        this.head = null,
        this.tail = this.head,
        this.size = 0
    }

    insertFirst(data){
        const newNode = new Node(data);

        if (this.length > 0){
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        
        let temp = head;
        while (temp.next !== null){
            size++;
            temp = temp.next;
        }
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        return this.tail;
    }
    clear(){
        this.head = null;
        this.tail = this.head;
        this.size = 0;
    }
    removeFirst(){
        if(this.head.next){
            this.head = this.head.next;
            this.size--;
        } else {
            this.head = null;
            this.tail = this.head;
            this.size = 0;
        }
       
    }
    removeLast(){
        let temp = this.head;

        while (temp.next.next !== null ){
            if (temp.next.next === null){
                this.tail
            }
        }
    }

}



module.exports = { Node, LinkedList };
