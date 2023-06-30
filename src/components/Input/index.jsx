import * as S from "./styles"
export function Input({ name, type = "text", label, placeholder, ...props }) {
  return (
    <S.Container>
      <S.Label htmlFor="">{label}</S.Label>
      <S.Input type={type} name={name} placeholder={placeholder} {...props} />
    </S.Container>
  )
}
