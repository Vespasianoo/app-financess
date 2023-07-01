import * as S from "./styles"
import { TrendingUp, TrendingDown } from "lucide-react"
export function Transaction({ item }) {
  return (
    <S.Container>
      <S.Desc>
        {item?.expense ? (
          <TrendingDown color="#EB5B64" />
        ) : (
          <TrendingUp color="#0AE360" />
        )}
        <span>{item.desc}</span>
      </S.Desc>
      <S.Amount expense={item?.expense ? 1 : 0}>{item.amount}</S.Amount>
    </S.Container>
  )
}
