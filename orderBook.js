function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []

  if (existingBook.length <= 0) {
    // console.log(updatedBook.concat(incomingOrder))
    return updatedBook.concat(incomingOrder)
  }

  for (let i = 0; i < existingBook.length; i++) {
    if (incomingOrder.type !== existingBook[i].type && incomingOrder.price === existingBook[i].price) {
      return true
    }
    if (incomingOrder.type === 'buy') {
      let existingBook = existingBook.push(incomingOrder)
    }
    if (incomingOrder.type === 'sell' && incomingOrder.quantity >= existingBook[i].quantity &&
    incomingOrder.price === existingBook[i].price) {
      updatedBook.push(incomingOrder)
    }
    // if there's anything leftover on both orders  - both are added to book
    // if there's anything leftover on one order - only that order gets added to the book 
    // else - push existing book order in
    else {
      updatedBook = existingBook.concat(incomingOrder)
    }
  }

  return updatedBook
}


module.exports = reconcileOrder
