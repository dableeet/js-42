//* 5

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

function simulateQueue() {
  const queue = new Queue();

  queue.enqueue('Клиент 1');
  queue.enqueue('Клиент 2');
  queue.enqueue('Клиент 3');
  console.log('Очередь после прихода клиентов:', queue.items);

  while (!queue.isEmpty()) {
    console.log(`${queue.dequeue()} обслуживается...`);
  }

  console.log('Очередь пуста:', queue.isEmpty());
}

simulateQueue();
