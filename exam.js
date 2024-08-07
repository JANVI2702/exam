// // queueusingtwostack

// class QueueStack {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }
//   enqueue(e) {
//     this.stack1.push(e); //add elemnts in 1st
//   }

//   dequeue() {
//     if (this.stack2.length == 0) {
//       while (this.stack1.length > 0) {
//         this.stack2.push(this.stack1.pop()); //remove and add the element from 1st to second stack
//       }
//     }
//     if (this.stack2.length == 0) {
//       throw new Error("queue is still empty");
//     }
//     return this.stack2.pop();
//   }

//   peek() {
//     if (this.stack2.length == 0) {
//       throw new Error("queue is still empty"); //display the first element in stack
//     }
//     return this.stack2[this.stack2.length - 1];
//   }

//   empty() {
//     return this.stack1.length === 0 && this.stack2.length === 0;
//   }
// }

// let obj = new QueueStack();
// obj.enqueue(10);
// obj.enqueue(20);
// console.log(obj.empty());
// console.log(obj.dequeue());
// console.log(obj.peek());
// console.log(obj.dequeue());
// console.log(obj.empty());

//2.balance the parantheses
// function isBalanced(expression) {
//   let stack = [];
//   for (let b of expression) {
//     if (b === "(" || b === "[" || b === "{") {
//       stack.push(b);
//       console.log(stack);
//     } else if (b === ")" || b === "]" || b === "}") {
//       if (stack.length === 0) {
//         return false;
//       }

//       let top = stack.pop(); // (   )
//       if (
//         (b === ")" && top !== "(") ||
//         (b === "}" && top !== "{") ||
//         (b === "]" && top !== "[")
//       ) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// console.log(isBalanced("[{(]}]")); //false
// console.log(isBalanced("[{()}]")); //true

//3.=>BUBBLESORT
// function bubble_sorting(arr) {
//   let swap;

//   do {
//     swap = false;
//     for (var i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swap = true;
//       }
//     }
//   } while (swap);
//   return arr;
// }

// console.log(bubble_sorting([9, 110, 7, 4, 3, 100]));

// 4.linklist is palidrom
// class Nodelist {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function isPalindrome(head) {
//   if (!head || !head.next) return true;
//   // Find the middle of the list
//   let slow = head;
//   let fast = head;
//   let stack = [];

//   while (fast && fast.next) {
//     stack.push(slow.data);
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   if (fast) {
//     slow = slow.next;
//   }

//   while (slow) {
//     if (slow.data !== stack.pop()) {
//       return false;
//     }
//     slow = slow.next;
//   }

//   return true;
// }

// function createLinkedList(arr) {
//   let head = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     const newNode = new Nodelist(arr[i]);
//     newNode.next = head;
//     head = newNode;
//   }
//   return head;
// }

// // Test cases
// const list1 = createLinkedList(["a", "b", "b", "a"]);
// const list2 = createLinkedList(["a", "b", "c", "b", "a"]);
// const list3 = createLinkedList(["a", "b", "c", "d"]);

// console.log(isPalindrome(list1)); // Output: true
// console.log(isPalindrome(list2)); // Output: true
// console.log(isPalindrome(list3)); // Output: false
