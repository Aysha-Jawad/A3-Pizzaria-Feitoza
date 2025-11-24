import React from "react";

interface PedidoConfirmadoProps {
  idPedido: string | null; // Recebe o ID do App.tsx
  onNext: () => void; // A prop que está usando para voltar
}

const PedidoConfirmado: React.FC<PedidoConfirmadoProps> = ({ idPedido, onNext }) => {
  return (
    <div className="pedido-confirmado"> 
      <header>
        <img src="teste2.jpeg" alt="Feitoza's Pizza" className="logo-top" />
        <h1>Confirmação de Pedido</h1>
      </header>
      <div className="card mensagem">
        <div className="checkmark">&#10004;</div>
        <h2>Seu pedido foi enviado!</h2>
        <p>Agradecemos sua preferência.</p>
        
        {/* EXIBINDO O ID DO PEDIDO */}
        <p style={{ fontWeight: 'bold', fontSize: '1.2em', marginTop: '15px', color: '#3b82f6' }}>
          ID do Pedido: {idPedido || 'Não disponível'}
        </p>
      </div>

      <button className="btn-red" onClick={onNext}>
        Voltar para a Home
      </button>
    </div>
  );
};

export default PedidoConfirmado;