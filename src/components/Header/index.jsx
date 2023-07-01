import * as S from "./styles"
import { Card } from "../../components/Card"
import { TrendingUp, TrendingDown, CircleDollarSign } from "lucide-react"

export function Header({ income, expense, total }) {
  return (
    <S.Container>
      <Card
        img={<TrendingUp color="#0AE360" />}
        text={"Entradas totais"}
        value={income}
      />
      <Card
        img={<TrendingDown color="#EB5B64" />}
        text={"Gastos totais"}
        value={expense}
      />
      <Card
        img={<CircleDollarSign color="#0AE360" />}
        text={"Balanço total"}
        value={total}
      />
    </S.Container>
  )
}
