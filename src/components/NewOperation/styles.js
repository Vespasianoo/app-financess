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
export const InputGroup = styled.div`
  label {
    display: block;
    background: red;
    display: flex;
    width: 68px;
    height: 48px;
    cursor: pointer;

    align-items: center;
    justify-content: center;
    border: 1px solid #d1d1d1;

    font-size: 14px;
    line-height: 28px;
    /* or 200% */
    letter-spacing: 0.25px;
  }
  input {
    display: none;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  input[type="radio"]:checked + label {
    border: 1px solid #4743e0;
    box-shadow: 0px 0px 14px rgba(71, 67, 224, 0.2);
    color: #4743e0;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.25px;
  }
`
