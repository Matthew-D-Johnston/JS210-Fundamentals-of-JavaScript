##### JS210 - Small Problems > List Processing

---

## Inventory Item Availability

### Problem

Building on the previous exercise, write a function that returns `true` or `false` based on whether or not an inventory `item` is available. As before, the function takes two arguments: an inventory `item` and a list of `transactions`. The function should return `true` only if the sum of the `quantity` values of the `item`'s transactions is greater than zero. Notice that there is a `movement` property in each transaction object. A `movement` value of `'out'` will decrease the `item`'s `quantity`.  

You may (and should) use the `transactionsFor` function from the previous exercise.  

---

### Examples / Test Cases

Examples: 

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

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true
```

---

### Data Structure

**Input**

* An Integer and an Array whose elements are Objects with three properties each: `id`, `movement`, and `quantity`.

**Output**

* A Boolean: `true` if the transaction item is available (i.e. the sum of the quantities for that item are greater than 0); `false` otherwise.

---

### Algorithm

**Abstractions:**

* First, we need to extract the Objects with the `id` number that matches the input Integer.
* Then we need to iterate over this subset of Objects and caculate how many items are in inventory.
* If an item has a `movement` property associated with an `'in'` value then we need to add the value associated with the `quantity` property; if the `movement` property is associated with the `'out'` value then we must subtract the value associated with the `quantity` property.

**Functions/Methods:**

* Use the `transactionsFor` function from the previous exercise.

**Implementation Steps:**

* Declare a `totalStock` variable and initialize it with the value of `0`.
* Extract a subset of transactions from the main transactions array using the `transactionsFor`. Assign to a `subTransactions` variable.
* Iterate over this subset array using `forEach`.
  * Use a conditional statement to check whether we have an `'in'` or an `'out'` value for the `movement` property of the object.
  * if `'in'`, add the value associated with the `quantity` property.
  * else, subtract the value associated with the `quantity` property.
* Return the boolean value associated with the comparison `totalStock > 0`.

---

### Code

```javascript
function isItemAvailable(transactionId, transactions) {
  let totalStock = 0;
  let subTransactions = transactionsFor(transactionId, transactions);

  subTransactions.forEach(transaction => {
    if (transaction.movement === 'in') {
      totalStock += transaction.quantity;
    } else {
      totalStock -= transaction.quantity;
    }
  });

  return totalStock > 0;
}

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
function isItemAvailable(item, transactions) {
  const quantity = transactionsFor(item, transactions).reduce((sum, transaction) => {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);
  
  return quantity > 0;
}
```

###### Discussion

The solution first uses the `transactionsFor` function to create a filtered list containing only the transactions related to the specified inventory `item`. The solution then computes the sum by using a reducing strategy.  

The callback function passed to the `Array.prototype.reduce` method takes two arguments: a `sum` integer and a `transaction` object. The solution initializes `sum` to `0` because if it weren't it would be implicitly set to the first element, which is an object (i.e., `{ id: 101, movement: 'in', quantity: 5 }`). Consequently, the return value of the callback won't be an accumulation of the quantity values. For each `transaction` object, if the value of `movement` is `'in'`, the solution increments `sum` by the value of `transaction.quantity`; otherwise, `sum` is decremented by that value.  

The solution stores the result of this reduction in the `quantity` variable. If `quantity` is greater than `0`, the `isItemAvailable` function will return `true`; otherwise it will return `false`.