function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []

  if (existingBook.length <= 0) {// works - don't change
    // console.log(updatedBook.concat(incomingOrder))
    return existingBook.concat(incomingOrder)
  }

  for (let i = 0; i < existingBook.length; i++) {
    if (incomingOrder.type === existingBook[i].type) {// works - don't change
      existingBook.push(incomingOrder)

      return existingBook
    }

    if ((incomingOrder.type !== existingBook[i].type) && (incomingOrder.price !== existingBook[i].price)) {// works - don't change
      existingBook.push(incomingOrder)

      return existingBook
    }
    // eslint-disable-next-line max-len
    if ((incomingOrder.type !== existingBook[i].type) && (incomingOrder.price >= existingBook[i].price) || (incomingOrder.price <= existingBook[i].price)) {
      if (incomingOrder.type === 'buy') {
        existingBook.push(incomingOrder)

        return existingBook
      }
      if (incomingOrder.type === 'sell' && incomingOrder.quantity >= existingBook[i].quantity &&
      incomingOrder.price === existingBook[i].price) {
        updatedBook.push(incomingOrder)
      }
      // if (incomingOrder.quantity === existingBook[i].quantity && incomingOrder.price === existingBook[i].price) {
      //   let existingBook = existingBook.splice(existingBook[i], 1)

      //   i--
      // }
      if (existingBook.includes(incomingOrder)) {
        return updatedBook.splice(existingBook[i])
      }
    }
    else {
      return existingBook.concat(incomingOrder)
    }
  }

  return updatedBook
}


module.exports = reconcileOrder
