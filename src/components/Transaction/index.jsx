import { StyleSheetManager } from "styled-components"
import * as S from "./styles"

import { TrendingUp, TrendingDown, X } from "lucide-react"
import { convert } from "../../utils/sum"
export function Transaction({ item, onDelete }) {
  const expense = item.expense
  const value = convert(Number(item.amount))

  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== "expense"}>
      <S.Container>
        <S.Desc>
          {item?.expense ? (
            <TrendingDown color="#EB5B64" />
          ) : (
            <TrendingUp color="#0AE360" />
          )}
          <span>{item.desc}</span>
        </S.Desc>
        <S.ContainerAmount>
          <S.Amount expense={expense ? 1 : 0}>{value}</S.Amount>
          <button>
            <X color="#e21d2a" onClick={() => onDelete(item.id)} />
          </button>
        </S.ContainerAmount>
      </S.Container>
    </StyleSheetManager>
  )
}
