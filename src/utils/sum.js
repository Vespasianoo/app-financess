export const sum = array => {
  let sum = 0
  for (let value of array) {
    sum += value
  }

  return sum.toFixed(2)
}
