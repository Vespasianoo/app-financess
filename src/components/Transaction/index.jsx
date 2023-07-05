import { StyleSheetManager } from "styled-components"
import * as S from "./styles"

import { TrendingUp, TrendingDown } from "lucide-react"

export function Transaction({ item }) {
  const expense = item.expense
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
        <S.Amount expense={expense ? 1 : 0}>{item.amount}</S.Amount>
      </S.Container>
    </StyleSheetManager>
  )
}
