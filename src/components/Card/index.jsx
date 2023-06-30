import * as S from "./styles"

export function Card({ img, text, value }) {
  return (
    <S.Container>
      {img}
      <S.Content>
        <span>{text}</span>
        <span>{value}</span>
      </S.Content>
    </S.Container>
  )
}
