// create a `reconcileOrder` function which will properly reconcile an incoming cryptocurrency order given the existing book of orders.
function reconcileOrder() {
  let existingBook = []
  let incomingOrder = { type: 'sell', quantity: 10, price: 6150 }
  let updatedBook = reconcileOrder(existingBook, incomingOrder)

  if (incomingOrder.type === 'sell') {
    // add 6150 at quantity of 10 to the existingBook array
  }

  return reconcileOrder

}

// if statements, buy or sell?

// update quantities of matching prices 

// objects in arrays - use dot notation to update quantity

// at the end - return updated book in reconciled order (updated orders go to the end of the updated book)

// if buy - it runs the buy order statement

//  if sell - it runs the sell order statement
