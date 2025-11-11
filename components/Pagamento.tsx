import React from "react";

interface PagamentoProps {
  total: number;
  onNext: () => void;
}

const formasPagamento = [
  { id: "pix", alt: "Pix", src: "/icons/pix.png" },
  { id: "mastercard", alt: "MasterCard", src: "/icons/mastercard.png" },
  { id: "ticket", alt: "Ticket", src: "/icons/ticket.png" },
  { id: "vr", alt: "VR", src: "/icons/vr.png" },
  { id: "dinheiro", alt: "Dinheiro", src: "/icons/dinheiro.png" },
];

const Pagamento: React.FC<PagamentoProps> = ({ total, onNext }) => {
  const [pagamentoSelecionado, setPagamentoSelecionado] = React.useState<string>("");

  return (
    <div className="pagamento">
      <header>
        <img src="/logo.png" alt="Feitoza's Pizza" className="logo-top" />
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
      <button
        className="btn-red"
        disabled={!pagamentoSelecionado}
        onClick={onNext}
      >
        Próximo
      </button>
    </div>
  );
};

export default Pagamento;