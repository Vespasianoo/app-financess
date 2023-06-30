import { Input } from "../Input"
import { Plus } from "lucide-react"
import * as S from "./styles"
import { useState } from "react"

export function NewOperation() {
  const [objeto, setObjeto] = useState({
    description: "",
    value: ""
  })
  const handleChange = event => {
    const { name, value } = event.target
    setObjeto({
      ...objeto,
      [name]: value
    })
  }

  const handleNew = event => {
    event.preventDefault()

    localStorage.setItem("item", JSON.stringify(objeto))
    console.log(objeto)
  }

  return (
    <S.Container>
      <Input
        type="text"
        name="description"
        label="Descrição"
        placeholder="Gastou com o que em?"
        value={objeto.description}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="value"
        label="Valor"
        placeholder="Quanto foi?"
        value={objeto.value}
        onChange={handleChange}
      />
      <Input type="text" name="type" label="Tipo" placeholder="Saída" />
      <S.Button onClick={handleNew}>
        <Plus size={32} />
        Nova operação
      </S.Button>
    </S.Container>
  )
}
