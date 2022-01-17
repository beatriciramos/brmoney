import { FormEvent, useState } from "react";
import Modal from "react-modal";
import incomingImg from "../../assets/img/entradas.svg";
import outImg from "../../assets/img/saidas.svg";
import { api } from "../../services/api";

import { Container, RadioBox, TransactionContainer } from "./styles";

interface ModalTransactionsProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalTransactions(props: ModalTransactionsProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, value, category, type };

    api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        X
      </button>{" "}
      <Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionContainer>
          <RadioBox
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomingImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionContainer>
        <input
          placeholder="Categoria"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
