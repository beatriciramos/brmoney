import { useState } from "react";
import logoImg from "../../assets/img/logo.svg";
import { BoxLogo, Container, Content } from "./styles";
import Modal from "react-modal";

interface HeaderProps {
  isModalOpen: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <BoxLogo>
          <img src={logoImg} alt="bt money" />
          <h2>BT Money</h2>
        </BoxLogo>
        <button type="button" onClick={props.isModalOpen}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
