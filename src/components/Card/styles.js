import styled from "styled-components"

export const Container = styled.div`
  padding: 3.2rem;

  border: 2px solid var(--color-3);
  border-radius: 0.4rem;

  width: 100%;
  max-width: 32rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  > span:last-child {
    font-size: 3.2rem;
    font-weight: 700;
  }
`
