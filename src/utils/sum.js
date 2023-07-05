export const sum = array => {
  let sum = 0
  for (let value of array) {
    sum += value
  }

  return sum
}

export const convert = value => {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}
