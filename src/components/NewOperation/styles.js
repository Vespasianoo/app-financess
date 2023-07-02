import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 2.8rem;
  background: ${theme.colors.zinc_900};
  border-radius: 0.4rem;
  margin-bottom: 5.4rem;
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
export const Radio = styled.div`
  align-self: end;
  input {
    display: none;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  > label {
    width: 10rem;
    height: 4.8rem;
    border-radius: 0.4rem;
    border: 0.2rem solid ${theme.colors.zinc_800};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
  }

  input:checked + label.entrada {
    border: 0.2rem solid ${theme.colors.green_500};
  }
  input:checked + label.saida {
    border: 0.2rem solid ${theme.colors.red_300};
  }
`
