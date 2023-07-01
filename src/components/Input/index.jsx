import { useId } from "react"
import * as S from "./styles"
export function Input({
  name,
  type = "text",
  label,
  placeholder,

  ...props
}) {
  const inputId = useId()
  return (
    <S.Container>
      <S.Label htmlFor={inputId}>{label}</S.Label>
      <S.Input
        type={type}
        name={name}
        id={inputId}
        placeholder={placeholder}
        {...props}
      />
    </S.Container>
  )
}
