const Node = class {
    data = null;
    next = null;
}

const Stack = class {
    head = null;
    push(data) {
        const node = new Node();
        node.data = data;
        node.next = this.head;
        this.head = node;
    }
    pop() {
        if(this.head != null) {
            let popElement = this.head;
            this.head = null;
            this.head = popElement.next;
            console.log("deleted value ==> ", popElement.data);
        }
    }
    print() {
        let temp = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
        temp = null;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
stack.print();
stack = null;