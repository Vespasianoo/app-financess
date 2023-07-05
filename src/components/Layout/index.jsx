import { useState, useEffect } from "react"
import { Container } from "./styles"
import { Nav } from "../Nav"
import { Header } from "../Header"
import { NewOperation } from "../NewOperation"
import { sum } from "../../utils/sum"

export function Layout() {
  const data = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  )
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const amountExpense = transactionsList
      .filter(item => item.expense)
      .map(transactions => Number(transactions.amount))

    const amountIncome = transactionsList
      .filter(item => !item.expense)
      .map(transactions => Number(transactions.amount))

    const expense = sum(amountExpense)
    const income = sum(amountIncome)

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)
  }, [transactionsList])

  const handleAdd = transaction => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }
  return (
    <Container>
      <Nav />
      <Header income={income} expense={expense} total={total} />
      <NewOperation
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </Container>
  )
}
