import React from "react";

type Categoria = "salgadas" | "especiais" | "doces";

interface CardapioProps {
  onSelectCategory?: (cat: Categoria) => void; // ✅ agora é opcional
  onNext: () => void; 
}

const Cardapio: React.FC<CardapioProps> = ({ onSelectCategory, onNext }) => {
  const handleClick = (categoria: Categoria) => {
    // ✅ chamamos somente se existir
    onSelectCategory?.(categoria); 
    onNext();                   
  };

  return (
    <div className="cardapio">
      <header>
        <img src="/logo.png" alt="Feitoza's Pizza" className="logo-top" />
        <h1>Cardápio</h1>
      </header>

      <div className="categorias">
        <button
          className="btn-red categoria-btn"
          onClick={() => handleClick("salgadas")}
        >
          Salgadas
        </button>

        <button
          className="btn-red categoria-btn"
          onClick={() => handleClick("especiais")}
        >
          Especiais
        </button>

        <button
          className="btn-red categoria-btn"
          onClick={() => handleClick("doces")}
        >
          Doces
        </button>
      </div>
    </div>
  );
};

export default Cardapio;
