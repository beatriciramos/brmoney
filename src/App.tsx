import { useState } from "react";
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { ModalTransactions } from "./components/ModalTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header isModalOpen={handleOpenModal} />
      <Dashboard />
      <ModalTransactions
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}
