import { Container } from "./styles";
import incomeImg from "../../assets/img/entradas.svg";
import outcomeImg from "../../assets/img/saidas.svg";
import totalImg from "../../assets/img/logo.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entrada" />
        </header>
        <strong>R$ - 500,00</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entrada" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
