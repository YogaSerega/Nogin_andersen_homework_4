class Stack {
   constructor(maxSize = 10) {

      if (!(Number.isInteger(maxSize)) || (maxSize <= 0)) {
         throw new Error('Number is not valid')
      }

      this.count = 0
      this.storage = []

      this.push = function (elem) {
         if (this.count > maxSize) {
            throw new Error('Stack is full')
         }
         this.storage[this.count] = elem
         this.count++
      }
      this.pop = function () {
         if (this.count <= 0) {
            throw new Error('Stack is empty')
         }
         this.count--
         let result = this.storage[this.count]
         delete this.storage[this.count]
         return result
      }
      this.peek = function () {
         return this.count > 0 ? this.storage[this.count - 1] : null
      }
      this.isEmpty = function () {
         return this.count === 0
      }
      this.toArray = function () {
         let reverseArray = []
         for (let i = 0; !this.isEmpty(); i++) {
            reverseArray[i] = this.pop()
         }
         for (let i = reverseArray.length - 1; i >= 0; i--) {
            this.push(reverseArray[i])
         }
         return reverseArray
      }
   }
   static fromIterable(iterable) {
      if (iterable[Symbol.iterator] === undefined) {
         throw new Error('iterable is not "iterable"')
      }
      let newStack = new Stack(iterable.length)
      for (let i = 0; i < iterable.length; i++) {
         if (typeof iterable[i] === 'object') {
            newStack.push(Object.assign(iterable[i]))

         } else {
            newStack.push(iterable[i])
         }
      }
     
      return newStack
   }

}

//Linked List
class Node {
   constructor(value) {
      this.value = value
      this.next = null
      this.previous = null
   }
}
class LinkedList {
   constructor() {
      this.head = null
      this.tail = null
      this.length = 0

      this.append = function (value) {
         const newNode = new Node(value);
         if (!this.head) {
            this.head = newNode
            this.tail = newNode
         } else {
            newNode.previous = this.tail.next
            this.tail.next = newNode
            this.tail = newNode
         }
         this.length++
      }

      this.prepend = function (value) {
         const node = new Node(value)

         this.head.previous = node
         node.next = this.head
         this.head = node
         this.length++
      }

      this.find = function (value) {
         let currentNode = this.head
         while (currentNode) {
            if (currentNode.value === value) {
               return currentNode.value
            }
            currentNode = currentNode.next
         }
         return null
      }

      this.toArray = function () {
         const result = []
         let current = this.head
         while (current) {
            result.push(current.value)
            current = current.next
         }
         return result
      }
   }
   static fromIterable(iterable) {

      if (iterable[Symbol.iterator] === undefined) {
         throw new Error('iterable is not "iterable"')
      }

      let newLinkedList = new LinkedList()
      for (let i = 0; i < iterable.length; i++) {

         if (typeof iterable[i] === 'object') {

            newLinkedList.append(Object.assign(iterable[i]))

         } else {

            newLinkedList.append(iterable[i])

         }
      }
      return newLinkedList
   }
}
