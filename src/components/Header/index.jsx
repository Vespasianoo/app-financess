import { Card } from "../Card"
import { Container } from "./styles"

import imgTop from "../../assets/img/top.svg"
import imgBottom from "../../assets/img/bottom.svg"
import balanco from "../../assets/img/balanco.svg"
export function Header() {
  return (
    <Container>
      <Card text="Entradas totais" value="7.500.00" img={imgTop} />
      <Card text="Gastos totais" value="2,250.00" img={imgBottom} />
      <Card text="Balanço total" value="5.250.00" img={balanco} />
    </Container>
  )
}
