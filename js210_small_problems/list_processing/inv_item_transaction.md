##### JS210 - Small Problems > List Processing

---

## Inventory Item Transactions

### Problem

Write a function that takes two arguments, `inventoryItem` and `transactions`, and returns an array containing only the transactions for the specified `inventoryItem`.  

---

### Examples / Test Cases

Example:

```javascript
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
```

---

### Data Structure

**Input**

* An Integer and an Array whose elements are Objects.
* The properties of each Object are `id` (Integer), `movement` (String), and `quantity` (Integer).

**Output**

* An Array whose elements are Objects with an `id` property that corresponds to the input Integer.
* The Objects contain the same properties as the original Objects.

---

### Algorithm

**Abstractions:**

* Filter through the original Array to find the Objects whose `id` property matches the input Integer.
* The filter condition should thus be one that equates the input Integer value with the value associated with the respective Object's `id` property.

**Functions/Methods:**

* Create an `idMatch` function. It should take an Object and an Integer as arguments. It will return a boolean value: `true` if the `id` property of the Object is equal to the given Integer argument; `false` otherwise.
* Use the `filter` method to iterate over each individual Object.

**Implementation Steps:**

* Return the calling of the `filter` method on the input Array.

---

### Code

```javascript
function transactionsFor(transactionId, transactions) {
  return transactions.filter(trans => idMatch(trans, transactionId));
}

function idMatch(transaction, transactionId) {
  return transaction.id === transactionId;
}
```

---

### LS Solution

```javascript
function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}
```

###### Discussion

The shape of this problem is that of filtering. Given a list of inventory `transactions`, the solution selects only those that belong to a particular `inventoryItem`. The solution gets the relevant transactions by comparing the `inventory.id` of each transaction to the value of the `inventoryItem` argument. It keeps the transaction only if these two values are equal.

