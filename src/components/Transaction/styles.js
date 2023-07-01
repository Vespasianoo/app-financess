import styled from "styled-components"
import theme from "../../styles/theme"
export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.zinc_900};

  padding: 0.9rem 1.6rem;

  width: 100%;
`
export const Desc = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > span {
    color: ${theme.colors.white};
    text-transform: capitalize;
  }
`
export const Amount = styled.span`
  color: ${props =>
    props.expense ? theme.colors.red_300 : theme.colors.green_500};
`
