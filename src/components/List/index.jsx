import { Transaction } from "../Transaction"
import * as S from "./styles"
export function List({ itens, setItens }) {
  const onDelete = ID => {
    const newArray = itens.filter(transaction => transaction.id !== ID)
    setItens(newArray)
    localStorage.setItem("transactions", JSON.stringify(newArray))
  }
  return (
    <S.Container>
      <S.List>
        {itens?.map((item, index) => (
          <Transaction key={index} item={item} onDelete={onDelete} />
        ))}
      </S.List>
    </S.Container>
  )
}
