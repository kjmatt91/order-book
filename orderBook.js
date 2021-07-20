// create a `reconcileOrder` function which will properly reconcile an incoming cryptocurrency order given the existing book of orders.
function reconcileOrder(existingBook, incomingOrder) {
  let returnBook = []

  for (let i = 0; i < existingBook.length; i++) {
    // if order i'm looking at is equal to other order i'm looking at - no deal
    if (incomingOrder.type !== existingBook[i].type && incomingOrder.price === existingBook[i].price) {
      // if incoming is buy - subtract from existing book
      // if incoming is sell - subtract existing book from incoming order
      // if there's anything leftover on both orders  - both are added to book
      // if there's anything leftover on one order - only that order gets added to the book 
    }
    // else - push existing book order in

  }

  return returnBook
}


module.exports = reconcileOrder
