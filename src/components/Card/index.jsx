import { Container, CardInfo } from "./styles"
export function Card({ img, text, value }) {
  return (
    <Container>
      <img src={img} />
      <CardInfo>
        <span>{text}</span>
        <span>R${value}</span>
      </CardInfo>
    </Container>
  )
}
