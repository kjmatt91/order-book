/* eslint-disable max-len */
function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []

  if (existingBook.length <= 0) {
    return existingBook.concat(incomingOrder)
  }

  for (let i = 0; i < existingBook.length; i++) {
    if (incomingOrder.type === existingBook[i].type) {
      existingBook.push(incomingOrder)

      return existingBook
    }

    if ((incomingOrder.type !== existingBook[i].type) && (incomingOrder.price !== existingBook[i].price)) {
      existingBook.push(incomingOrder)

      return existingBook
    }
    if ((incomingOrder.type !== existingBook[i].type) && (incomingOrder.price === existingBook[i].price) && (incomingOrder.quantity === existingBook[i].quantity)) {
      existingBook.splice(i, 1)

      return existingBook
    }
    if ((incomingOrder.type !== existingBook[i].type) && (incomingOrder.price === existingBook[i].price) && (incomingOrder.quantity < existingBook[i].quantity)) {
      existingBook[i].quantity -= incomingOrder.quantity
      existingBook.push(...existingBook.splice(i, 1))

      return existingBook
    }
    if ((incomingOrder.type !== existingBook[i].type) && (incomingOrder.price === existingBook[i].price) && (incomingOrder.quantity > existingBook[i].quantity)) {
      incomingOrder.quantity -= existingBook[i].quantity

      existingBook.splice(i, 1)

      return reconcileOrder(existingBook, incomingOrder)
    }
  }

  return updatedBook
}




module.exports = reconcileOrder
