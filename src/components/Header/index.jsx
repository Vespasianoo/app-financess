import * as S from "./styles"
import { Card } from "../../components/Card"
import { TrendingUp, TrendingDown, CircleDollarSign } from "lucide-react"

export function Header() {
  return (
    <S.Container>
      <Card
        img={<TrendingUp color="#0AE360" />}
        text={"Entradas totais"}
        value={"R$7,500.00"}
      />
      <Card
        img={<TrendingDown color="#EB5B64" />}
        text={"Gastos totais"}
        value={"-R$2,250.00"}
      />
      <Card
        img={<CircleDollarSign color="#0AE360" />}
        text={"Balanço total"}
        value={"R$7,500.00"}
      />
    </S.Container>
  )
}
