class SLNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SLL {
  constructor() {
    this.head = null;
  }


  seedFromArray(vals) {
    for (let data of vals) {
      this.insertAtBack(data)
    }
    return this
  }
  //  MONDAY -------------------------------------------------------------------//
  /**
   * Prints all the nodes in the list to the console.
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {SinglyLinkedList} This list.
   */
  isEmpty() {
    if (this.head === null) {
      return true
    }
    return false
  }
  printValues() {
    // SLL IS EMPTY
    if (this.isEmpty()) {
      console.log("SLL IS EMPTY")
    }
    // SLL IS NOT EMPTY
    let runner = this.head
    while (runner != null) {
      console.log(runner.value)
      runner = runner.next
    }
  }

  //  TUESDAY -------------------------------------------------------------------//
  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    let runner = this.head;

    if (this.isEmpty()) {
      let slNode1 = new SLNode(data);
      this.head = slNode1;
    }
    else {
      while (runner.next != null) {
        runner = runner.next;
      }
      let SLNode2 = new SLNode(data);
      runner.next = SLNode2;
      // SLL IS EMPTY
      // CREATE A NEW NODE WITH THE GIVEN DATA
      // POINT THE HEAD TO THE NEW NODE
      // RETURN
      // SLL IS NOT EMPTY
      // CREATE A RUNNER AT THE HEAD
      // RUN THE RUNNER UNTIL IT GETS TO THE LAST NODE
      // CREATE A NEW NODE WITH THE GIVEN DATA
      // POINT THE RUNNER'S NEXT TO THE NEW NODE
    }
    /**
     * Adds each item of the given array to the back of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    // seedFromArr(vals) {

    // }

  }


  // WEDNESDAY -------------------------------------------------------------------//

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    // SLL IS EMPTY
    // CREATE A NEW NODE WITH THE GIVEN DATA
    let slNode1 = new SLNode(data);
    if (this.isEmpty()) {
      // POINT THE HEAD TO THE NEW NODE
      this.head = slNode1;
      // RETURN
      return;
    }
    // SLL IS NOT EMPTY
    else {
      // CREATE A NEW NODE WITH THE GIVEN DATA
      // SET THE NEW NODE NEXT TO THE HEAD
      slNode1.next = this.head;
      // POINT HEAD TO NEW NODE
      this.head = slNode1;
      return;
    }
  }

  /**
   * Removes the first node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the removed node.
   */
  removeAtFront() {
    // SLL IS EMPTY
    if (this.isEmpty()) {
      // DO NOTHING, NOTHING TO REMOVE
      return;
    }
    else {
      // SLL IS NOT EMPTY
      // MOVE HEAD TO NEXT NODE
      this.head = this.head.next;
    }
  }

  // EXTRA
  /**
   * Calculates the average of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    let total = 0;
    let length = 0;
    let runner = this.head;
    while (runner !== null) {
      length++;
      total += runner.value;
      runner = runner.next;
    }
    console.log(`Average is: ${total / length}`)
    return this;
  }

  // THURSDAY --------------------------------------------------------------------//

  /**
   * Removes the last node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    // SLL IS EMPTY
    if (this.head == null) {
    }
    else if (this.head.next == null) {
      // SLL HAS 1 NODE
      this.head.next = null;
      return;
    }
    // SLL IS NOT EMPTY
    else {
      let runner = this.head;
      while (runner.next.next != null) {
        runner = runner.next;
      }
      runner.next = null;
    }
    return;
  }
  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(target) {
    // is empty
    if (this.isEmpty()) {
      return false
    }

    let runner = this.head;
    while (runner !== null) {
      // checking if runners value is the target
      if (runner.value == target) {
        return true;
      }
      runner = runner.next;
    }
  }

  // ------------------------------------------------------ Friday

  /**
   * Removes the node that has the matching given val as it's data.
   * - Time: (?).
   * - Space: (?).
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    let runner = this.head

    // THE NODE TO REMOVE IS THE FIRST NODE
    if (this.head.value == val) {
      this.head = null;
      return true;
    }
    // THE NODE TO REMOVE IS SOMEWHERE IN THE MIDDLE
    // THE NODE TO REMOVE IS THE LAST NODE
    while (runner.next != null) {
      if (runner.next.value == val) {
        runner.next = runner.next.next;
        return true;
      }
      else {
        runner = runner.next;
      }
      return false;
      // THE NODE TO REMOVE IS NOT THERE
    }
  }

  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    // SLL IS EMPTY
    if (this.head == null) {
      return null;
    }
    // SLL HAS 1 NODE
    else if (this.head.next.next == null) {
      return false;
    }
    // SLL IS NOT EMPTY
    else {
      let runner = this.head;
      while (runner.next.next.next != null) {
        runner = runner.next;
      }
      runner.next.next = null;
    }
    return;
  }

  //  FRIDAY EXTRA
  /**
   * Retrieves the data of the kth to last node in this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data of the kth to last node or null if there is no
 *    kth to last node.
   */
  kthToLast(k) {

  }
}


// EXTRA
/**
 * Determines whether or not the given search value exists in this list.
 * - Time: (?).
 * - Space: (?).
 * @param {any} val The data to search for in the nodes of this list.
 * @param {?node} current The current node during the traversal of this list
 *    or null when the end of the list has been reached.
 * @returns {boolean}
 */
// containsRecursive(val, current = this.head) {

// }
//==========================//
//         TESTING          //
//==========================//


var sll = new SLL();
sll.seedFromArray([1, 2, 3, 4, 5]);
sll.removeBack()
// sll.insertAtBack(1)
// sll.insertAtBack(2)
// sll.insertAtBack(3)
// sll.insertAtBack(4)
// sll.insertAtBack(5)
// sll.insertAtFront(10)
// sll.insertAtFront(7)
// sll.insertAtFront(40)
// sll.removeAtFront(40)


sll.printValues()