const index = require('./index')
const source = 'KBANK'

test("Should Return 0 IF Amuont is 1 And Differance Bank", () => {
 
  const destination = 'SCB'
  const amount = 1
  const fee = 0
 
  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 0 IF Amuont is 500 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 500
  const fee = 0

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 0 IF Amuont is 4999 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 4999
  const fee = 0

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 0 IF Amuont is 5000 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 5000
  const fee = 0
  
  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 1 IF Amuont is 5001 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 5001
  const fee = 1

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 1 IF Amuont is 9999 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 9999
  const fee = 1

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 1 IF Amuont is 10000 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 10000
  const fee = 1

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 2 IF Amuont is 10001 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 10001
  const fee = 2

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 2 IF Amuont is 14999 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 14999
  const fee = 2

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 2 IF Amuont is 15000 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 15000
  const fee = 2

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 3 IF Amuont is 15001 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 15001
  const fee = 3

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})
test("Should Return 3 IF Amuont is 19999 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 19999
  const fee = 3

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})
test("Should Return 3 IF Amuont is 20000 And Differance Bank", () => {
  const destination = 'SCB'
  const amount = 20000
  const fee = 3

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 0 IF Amuont is 5000 And Same Bank", () => {
  const destination = 'KBANK'
  const amount = 5000
  const fee = 0

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 0 IF Amuont is 10000 And Same Bank", () => {
  const destination = 'KBANK'
  const amount = 10000
  const fee = 0

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 0 IF Amuont is 15000 And Same Bank", () => {
  const destination = 'KBANK'
  const amount = 15000
  const fee = 0

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return 0 IF Amuont is 20000 And Same Bank", () => {
  const destination = 'KBANK'
  const amount = 20000
  const fee = 0

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return NULL IF Amuont is -1", () => {
  const destination = 'KBANK'
  const amount = -1
  const fee = null

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})
test("Should Return NULL IF Amuont is 0", () => {
  const destination = 'KBANK'
  const amount = 0
  const fee = null

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})
test("Should Return NULL IF Amuont is 20001", () => {
  const destination = 'KBANK'
  const amount = 20001
  const fee = null

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

test("Should Return NULL IF Amuont is 1000.5 *", () => {
  const destination = 'KBANK'
  const amount = 1000.5
  const fee = null

  const result = index.calculateFee(source, destination, amount)

  expect(result).toBe(fee)
})

