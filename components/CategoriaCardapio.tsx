import React from "react";

interface Produto {
  nome: string;
  descricao?: string;
  preco: number;
}

interface CategoriaCardapioProps {
  categoria: "salgadas" | "especiais" | "doces";
  produtos: Produto[];
  onAdd: (produto: Produto) => void;
}

const CategoriaCardapio: React.FC<CategoriaCardapioProps> = ({
  categoria,
  produtos,
  onAdd,
}) => {
  return (
    <div className={`categoria-cardapio ${categoria}`}>
      <h2>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
      <div className="produtos-lista">
        {produtos.map(({ nome, descricao, preco }, idx) => (
          <div key={idx} className="produto">
            <div className="nome">{nome}</div>
            {descricao && <div className="descricao">{descricao}</div>}
            <div className="preco">R$ {preco.toFixed(2)}</div>
            <button
              className="btn-red pequeno"
              onClick={() => onAdd({ nome, preco })}
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaCardapio;
