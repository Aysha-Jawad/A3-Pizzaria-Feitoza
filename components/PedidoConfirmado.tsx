import React from "react";

interface PedidoConfirmadoProps {
  onNext: () => void;
}

const PedidoConfirmado: React.FC<PedidoConfirmadoProps> = ({ onNext }) => {
  return (
    <div className="pedido-confirmado">
      <img src="/logo.png" alt="Feitoza's Pizza" className="logo-top" />
      <div className="checkmark">&#10004;</div>
      <p>Seu pedido está sendo preparado!</p>
      <p>O manco agradece!</p>
      <button className="btn-red" onClick={onNext}>
        Próximo
      </button>
    </div>
  );
};

export default PedidoConfirmado;
