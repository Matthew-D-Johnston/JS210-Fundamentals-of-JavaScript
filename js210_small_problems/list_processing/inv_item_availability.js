"use strict";

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

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));
