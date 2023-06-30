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
export const Input = styled.input`
  padding: 1.6rem;
  border-radius: 0.4rem;
  border: 0.2rem solid ${theme.colors.zinc_800};
  color: ${theme.colors.white};
  width: 100%;
  max-width: 29rem;
  width: 100%;
  height: 4.8rem;

  &::placeholder {
    color: ${theme.colors.white};
  }
`
