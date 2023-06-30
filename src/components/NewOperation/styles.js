import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 2.8rem;
  background: ${theme.colors.zinc_900};
  border-radius: 0.4rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 0.8rem;

  height: 4.8rem;
  width: min(100%, 19rem);
  padding-inline: 1.6rem;

  background: ${theme.colors.green_500};
  border-radius: 0.4rem;

  color: ${theme.colors.background};
  font-size: 1.6rem;
  font-weight: 700;

  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
