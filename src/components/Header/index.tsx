import logoImg from "../../assets/img/logo.svg";
import { BoxLogo, Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <BoxLogo>
          <img src={logoImg} alt="bt money" />
          <h2>BT Money</h2>
        </BoxLogo>
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
