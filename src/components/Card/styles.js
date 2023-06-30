import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: min(100%, 34rem);
  height: 13rem;

  border-radius: 0.4rem;
  border: 0.2rem solid #242424;
  padding-inline: 3.2rem;

  > svg {
    width: 5.4rem;
    height: 5.4rem;
    flex-shrink: 0;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > span:last-child {
    font-size: 3.2rem;
    font-weight: 700;
  }
`
