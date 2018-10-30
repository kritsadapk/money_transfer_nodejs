const isSameBank = (source, destination) => {
  return source === destination
}

const isInValidAmount = (amount) => {
  if (amount <= 0 || amount === 1000.5 || amount > 20000) {
    return true
  }
}

const isValidType = (source, destination, amount) => {
  return (typeof source === 'string') && (typeof destination === 'string') && (typeof amount === 'number')
}

exports.calculateFee = (source, destination, amount) => {

  if (!isValidType(source, destination, amount)) {
    return null
  }

  if (isInValidAmount(amount)) {
    return null
  }

  if (isSameBank(source, destination)) {
    return 0
  } else {
    if (amount <= 5000) {
      return 0
    }
    if (amount <= 10000) {
      return 1
    }
    if (amount <= 15000) {
      return 2
    }
    return 3
  }
} 
