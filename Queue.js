const Node = class {
    data = null;
    next = null;
}

const Queue = class {
    head = null;
    tail = null;
    isEmpty() {
        return this.head == null;
    }
    push(data) {
        let node = new Node();
        node.data = data;
        if(this.head == null) {
            this.head = node;
        } else if(this.tail != null) {
            this.tail.next = node;
        }
        this.tail = node;
    }
    pushAt(data, index) {
        let counter = !this.isEmpty() ? 1 : 0;
        if(counter == 0) {
            this.push(data);
        } else {
            let current = this.head;
            while(current != null) {
                if(counter++ == index) {
                    let node = new Node();
                    node.data = data;
                    node.next = current.next;
                    current.next = node;
                    break;
                }
                current = current.next;
            }
        }
    }
    pop() {
        if(this.head != null) {
            let popedElement = this.head;
            if(this.head == this.tail) {
                this.tail = null;
            }
            console.log("deleted value ==> ", popedElement.data);
            this.head = null;
            this.head = popedElement.next;
            popedElement = null;
        }
    }
    popAt(index) {
        if(this.head != null) {
            let counter = !this.isEmpty() ? 1 : 0;
            if(counter == 0) return;
            let current = this.head;
            if(index == 1) {
                if(this.head.next == null) {
                    this.tail = null;
                }
                this.head = null;
            } else {
                while(current.next != null) {
                    if(counter+1 == index) {
                        let popedElement = current;
                        if(current == this.head) {
                            this.head = current.next;
                        }
                        if(current.next == this.tail) {
                            this.tail = current;
                            current.next = null;
                        } else {
                            current.next = popedElement.next.next;
                        }
                        console.log("deleted value ==> ", popedElement.data);
                        popedElement = null;
                        break;
                    }
                    counter++;
                    current = current.next;
                }
            }
        }
    }
    print() {
        let queueItem = this.head;
        while(queueItem != null) {
            console.log("data ==> ", queueItem.data);
            queueItem = queueItem.next;
        }
    }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.popAt(7);
queue.push(6);
queue.print();