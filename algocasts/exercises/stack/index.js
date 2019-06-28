// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(){
        this.data = [],
        this.size = 0
    }

    peek(){
        if (this.size === 0){
            return undefined;
        } else {
            return this.data[this.data.length - 1];
        }
    }

    pop(){
        if (this.size === 0){
            return undefined;
        } else {
            this.size --;
            return this.data.pop();
        }
    }
    push(val){
        this.data.push(val);
        this.size++;
    }
}

module.exports = Stack;
