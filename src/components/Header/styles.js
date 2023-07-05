import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5.2rem;
  gap: 0.8rem;
  @media (max-width: 776px) {
    width: 100%;
    flex-direction: column;
  }
`
