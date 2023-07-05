import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: min(100%, 29rem);
`
export const Label = styled.label`
  color: ${theme.colors.white};
  font-size: 1.8rem;
  font-weight: 700;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 29rem;
  height: 4.8rem;
  border: 0.2rem solid ${theme.colors.zinc_800};
  border-radius: 0.4rem;
  padding-inline: 1.6rem;
  > svg {
    stroke: ${theme.colors.zinc_100};
  }

  &:focus-within {
    outline: auto;
  }
`
export const Input = styled.input`
  color: ${theme.colors.white};
  width: 100%;
  height: 100%;
  &::placeholder {
    color: ${theme.colors.white};
  }
  padding-left: 0.8rem;
  outline: none;
`
