class Stack<T> {
  private elements: T[] = [];

  constructor(private size: Number) {}

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  isFull(): boolean {
    return this.elements.length === this.size;
  }

  push(element: T): void {
    if (this.isFull()) {
      throw new Error("Stack is Overflow!!");
    }
    this.elements.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!!");
    }
    return this.elements.pop();
  }
}

let numbers = new Stack<number>(5);
console.log("---------- Before Push ----------");
console.log(numbers.isEmpty());
console.log(numbers.isFull());
numbers.push(10);
numbers.push(20);
numbers.push(30);
numbers.push(40);
numbers.push(50);

console.log("\n---------- After Push ----------");
console.log(numbers.isEmpty());
console.log(numbers.isFull());

// numbers.push(60)
console.log(numbers.pop());
console.log(numbers)
console.log(numbers.pop());
console.log(numbers)
console.log(numbers.pop());
console.log(numbers)
