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
  const [isExpense, setIsExpense] = useState(false)

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
          placeholder={isExpense ? "Gastou com o que em?" : "Ganhou com o que?"}
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
        <S.Radio>
          <input
            type="radio"
            name="tipo"
            id="entrada"
            value="entrada"
            defaultChecked
            onChange={() => setIsExpense(!isExpense)}
          />
          <label htmlFor="entrada" className="entrada">
            Entrada
          </label>
        </S.Radio>
        <S.Radio>
          <input
            type="radio"
            name="tipo"
            id="saida"
            value="saida"
            onChange={() => setIsExpense(!isExpense)}
          />
          <label htmlFor="saida" className="saida">
            Saida
          </label>
        </S.Radio>

        <S.Button onClick={handleSave}>
          <Plus size={32} />
          Nova operação
        </S.Button>
      </S.Container>
      <List itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}
