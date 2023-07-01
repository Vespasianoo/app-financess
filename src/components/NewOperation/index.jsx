import { useState } from "react"

import { List } from "../List"
import { Plus } from "lucide-react"
import { Input } from "../Input"

import * as S from "./styles"

export function NewOperation({
  handleAdd,
  transactionsList,
  setTransactionsList
}) {
  const [desc, setDesc] = useState("")
  const [amount, setAmount] = useState("")
  const [isExpense, setExpense] = useState(false)

  const generateID = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!")
      return
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!")
      return
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense
    }

    handleAdd(transaction)

    setDesc("")
    setAmount("")
  }
  return (
    <>
      <S.Container>
        <Input
          type="text"
          name="description"
          label="Descrição"
          placeholder="Gastou com o que em?"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <Input
          type="number"
          name="value"
          label="Valor"
          placeholder="Quanto foi?"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <div>
          <input
            type="radio"
            name="tipo"
            id="entrada"
            defaultChecked
            onChange={() => setExpense(!isExpense)}
          />
          <label htmlFor="entrada">
            <div>entrada</div>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="tipo"
            id="saida"
            onChange={() => setExpense(!isExpense)}
          />
          <label htmlFor="saida">
            <div>saida</div>
          </label>
        </div>

        <S.Button onClick={handleSave}>
          <Plus size={32} />
          Nova operação
        </S.Button>
      </S.Container>
      <List itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}
