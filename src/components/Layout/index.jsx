import { Container } from "./styles"
import { Nav } from "../Nav"
import { Header } from "../Header"
import { NewOperation } from "../NewOperation"

export function Layout() {
  return (
    <Container>
      <Nav />
      <Header />
      <NewOperation />
    </Container>
  )
}
