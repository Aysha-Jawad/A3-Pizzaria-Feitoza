import React, { useState } from "react";

interface ItemPedido {
  descricao: string;
  quantidade: number;
  valorUnitario: number;
}

interface PagamentoProps {
  itens: ItemPedido[];                             // ✔ adicionado
  total: number;
  onFinalizarComSucesso: (id: string) => void;     // ✔ adicionado
  onVoltarPedido: () => void;                      // ✔ adicionado
}

const formasPagamento = [
  { id: "pix", alt: "Pix", src: "/icons/Pix.png" },
  { id: "mastercard", alt: "MasterCard", src: "/icons/Mastercard.png" },
  { id: "ticket", alt: "Ticket", src: "/icons/Ticket.png" },
  { id: "vr", alt: "VR", src: "/icons/VR.png" },
  { id: "dinheiro", alt: "Dinheiro", src: "/icons/dinheiro.jpg" },
];

// ✔ Agora o componente recebe TODAS as props corretas
const Pagamento: React.FC<PagamentoProps> = ({
  itens,
  total,
  onFinalizarComSucesso,
  onVoltarPedido
}) => {

  const [pagamentoSelecionado, setPagamentoSelecionado] = useState<string>("");

  const finalizarPagamento = () => {
    // Aqui você pode chamar a API, mas por enquanto só simula:
    const fakeId = String(Date.now());
    onFinalizarComSucesso(fakeId);
  };

  return (
    <div className="tela pagamento">
      <header>
        <img src="teste2.jpeg" alt="Feitoza's Pizza" className="logo-top" />
        <h1>Formas de Pagamento</h1>
        <div className="total">R$ {total.toFixed(2)}</div>
      </header>

      <div className="formas-pagamento">
        {formasPagamento.map((fp) => (
          <button
            key={fp.id}
            onClick={() => setPagamentoSelecionado(fp.id)}
            className={`forma-btn ${
              pagamentoSelecionado === fp.id ? "selecionado" : ""
            }`}
          >
            <img src={fp.src} alt={fp.alt} />
          </button>
        ))}
      </div>

      <div className="area-btn-red">
        <button className="btn-red" onClick={onVoltarPedido}>
          Voltar ao Pedido
        </button>

        <button
          className="btn-red"
          disabled={!pagamentoSelecionado}
          onClick={finalizarPagamento}
        >
          Confirmar Pagamento
        </button>
      </div>

    </div>
  );
};

export default Pagamento;