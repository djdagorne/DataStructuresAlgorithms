
const util = require('util')

class _Node{
	constructor(value, next=null){
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null; //head alwasy contains first node
		this.size = 0;
	}
	insertFirst(item) {
		this.head = new _Node(item, this.head);
		this.size++;
	}
	insertLast(item) { //has to read the whole list to insert at the end, therefor its a O(n) operation effeciency
        if (this.head === null) {
            this.insertFirst(item);
        }
		else{
			let tempNode = this.head;
			while(tempNode.next !== null){
				tempNode = tempNode.next;
			}
			tempNode.next = new _Node(item, null);
			this.size++
		}
	}
	insertBefore(key, item) {
		//no list, add item to list
		if (this.head === null) {
			return;
		}
		//if head === key, insert item before given node (key)
		if (this.head.value === key) {
			this.insertFirst(item);
			return;
		}
	// start at the head  
		let prevNode = null;
		let currNode = this.head;

		// check to current node is not the same as key and is not null
		while(currNode !== null && currNode.value !== key){
			prevNode = currNode;
			currNode = currNode.next;
		}
		//insert this new node between current node and previous node
		//if there is no node at key, return error.
		if (currNode === null){
			console.log('Node not found / Key not found')
			return;
		}
		prevNode.next = new _Node(item, currNode);
		this.size++;
	}
	find(item){ //skim through list comparing value
		let currNode = this.head;
		if(!this.head){
			return null; //if list is empty return null
		}
		while (currNode.value !== item){
			if(currNode.next === null){
				return null;
			}
			else{
				currNode = currNode.next;
			}
		}
		return currNode
	}
	insertAfter(key, item){
		let tempNode = this.head;
		while(tempNode !== null && tempNode.value !== key){
			tempNode = tempNode.next;
		} 
		if(tempNode !== null){
			tempNode.next = new _Node(item, tempNode.next);
			this.size++;
		}  
	}
	insertAt(key, item) {
      	// out of range
		if (key > 0 && key > this.size) {
			console.log('Out of range');
			return;
		}

		if(key === 0) {
			this.insertFirst(item);
			return;
		}

		const node = new _Node(item);
		let current, previous, counter;
		counter = 0;
		current = this.head;

		while(counter < key) {
			counter++;
			previous = current;
			current = current.next;
		}
		previous.next = node;
		node.next = current;
		this.size++;
    }
	remove(item){ //best case O(1) worst case O(n)
		if(!this.head){
			return null;
		}
		if(this.head.value === item){ //if you're removing the head, make the next node this.head
			this.head = this.head.next;
			return;
		}
		let currNode = this.head; //starting at the head
		let previousNode = this.head; //keep track of the previous node
		while((currNode !== null) && (currNode.value !== item)){
			previousNode = currNode;
			currNode = currNode.next;
		}
		if(currNode === null){
			console.log('item not found')
			return;
		}
		previousNode.next = currNode.next; //reroute the previousNode.next to avoid the node we want to be deleted .
		this.size--;
	}
	
}

const sll = new LinkedList();
const empty = new LinkedList();

function main(){ 

	sll.insertLast('First');
	sll.insertLast('Second');
	sll.insertLast('Third');
	sll.insertLast('Fourth');
	sll.insertLast('Fifth');
	sll.insertLast('Sixth');

	sll.remove('Third');

	sll.insertBefore('Second','Third Again');

	sll.insertAfter('Fourth','Pre-Five');

	sll.insertAt(3,'Pre-Three');

	sll.remove('Sixth');
	
	return sll;
}

main()

function displayList(list){
	return  util.inspect(sll, {depth: null});
}

displayList(sll)

function isEmpty(list){
	if(list.head === null){
		return true;
	}
	else{
		return false;
	}
}

//isEmpty(sll)

function findPrev(sll, item) {
    let prevNode = null;
    let currNode = sll.head;

    // check to see if head is null, and continue along list.
    while(currNode !== null && currNode.value !== item){
		prevNode = currNode;
		currNode = currNode.next;
    }
	if(currNode.next === null && currNode !== item){
		return 'item not found';
	}
    return prevNode;
}

//findPrev(sll, 'Kat')

function findLast(list){
	if(list.head === null){
		return 'Empty list';
	}
	let currNode = list.head;
	while(currNode.next !== null){
		currNode = currNode.next;
	}
	return currNode;
}

//findLast(sll);

function reverseList(list){
	if(list.head === null){
		return 'Empty list';
	}
	let currNode = list.head;
	let prevNode = null;
	let nextNode;
	while(currNode !== null){
		nextNode = currNode.next;
		currNode.next = prevNode;
		prevNode = currNode;
		currNode = nextNode;
	}
	list.head = prevNode;
	return list;
}

//displayList(reverseList(sll)); 

/* 3rd from the end
Write an algorithm to find the 3rd element from the end of a linked list. Note You
may be tempted to add a length property to your linked list class. The length property 
is not a typical property of linked list, therefore don't make any modification 
to the linked list class that is provided to you.

// count through a list assigning currNode, lastNode, lastLastNode until you hit node.next === null. 
// return lastLastNode or error saying 'no valid node'.
 */

 
function findThirdLast(list){
	console.log('finding third last')
	if(list.head === null){
		return 'Empty list';
	}
	let currNode = list.head;
	let lastNode = null;
	let lastLastNode = null;
	let thirdLastNode = null;
	while(currNode.next !== null){
		thirdLastNode = lastLastNode;
		lastLastNode = lastNode;
		lastNode = currNode;
		currNode = currNode.next;
	}
	return thirdLastNode;
}

//findThirdLast(sll);

 /* 
Middle of a list
Write an algorithm to find the middle element of a linked list. Note You may be
tempted to add a length property to your linked list class. The length property
is not a typical property of linked list, therefore don't make any modification
to the linked list class that is provided to you. Also, finding the size of
the linked list using the size() function and dividing it by half will not
find the correct middle of the linked list. So, don't use either of these
approaches.

Cycle in a list
Write an algorithm to find whether a linked list has a cycle (i.e., whether a 
node in the list has its next value pointing to an earlier node in the list). 
For this exercise, create a linked list with the name CycleList. Be sure to 
insert nodes in the list so that it has a cycle. Then test your program with 
a cycleList function.

Sorting a list
Write an algorithm that will sort a given linked list. For example given a 
list such as 3->2->5->7->1, your program will output the sorted version of 
this list which will be 1->2->3->5->7. You may not use another list or any 
other data structure such as an array to store the data. Also, you can only 
go through the list once, O(n) runtime. */