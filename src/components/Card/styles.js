import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: min(100%, 34rem);
  height: 13rem;

  border-radius: 0.4rem;
  border: 0.2rem solid ${theme.colors.zinc_800};
  padding-inline: 3.2rem;

  > svg {
    width: 5.4rem;
    height: 5.4rem;
    flex-shrink: 0;
  }

  @media (max-width: 999px) {
    padding-inline: 2.2rem;
    gap: 1rem;
    > svg {
      width: 3.4rem;
      height: 3.4rem;
    }
  }

  @media (max-width: 776px) {
    width: 100%;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > span {
    color: ${theme.colors.white};
  }
  > span:last-child {
    font-size: 3.2rem;
    font-weight: 700;
  }

  @media (max-width: 999px) {
    > span:last-child {
      font-size: 2.8rem;
    }
  }
`
