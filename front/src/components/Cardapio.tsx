import React, { useState } from "react";

type Categoria = "salgadas" | "especiais" | "doces";

interface Produto {
  nome: string;
  descricao?: string;
  preco: number;
}

interface CardapioProps {
  onSelectCategory?: (cat: Categoria) => void;
  onAdd: (produto: Produto) => void;     // ✅ AGORA É OBRIGATÓRIO
  onNext: () => void; 
}

const produtosPorCategoria: Record<Categoria, Produto[]> = {
  salgadas: [
    { nome: "Calabresa", descricao: "Mussarela, calabresa e cebola.", preco: 39.9 },
    { nome: "Frango", descricao: "Frango desfiado com catupiry", preco: 39.9 },
    { nome: "Marguerita", descricao: "Mussarela, rodela de tomate e manjericão.", preco: 39.9 },
    { nome: "Toscana", descricao: "Calabresa moída com pimenta e queijo mussarela.", preco: 49.9 },
    { nome: "Quatro Queijos Verde", descricao: "Mussarela, gorgonzola, parmesão e catupiry combinados com pesto de manjericão.", preco: 49.9 },
  ],
  especiais: [
    { nome: "Bacon Supreme", descricao: "Bacon, cheddar e mussarela.", preco: 62.9 },
    { nome: "Quatro Queijos", descricao: "Mussarela, gorgonzola, parmesão, provolone.", preco: 59.9 },
    { nome: "Parma & Rúcula", descricao: "Mussarela especial, fatias de presunto parma e rúcula fresca.", preco: 54.9 },
    { nome: "Costela Barbecue", descricao: "Lascas de costela desfiada, mussarela, cebola caramelizada e molho barbecue defumado.", preco: 54.9 },
    { nome: "Mediterrânea da Casa", descricao: "Molho rústico de tomate, mussarela de búfala, tomate-cereja, azeitonas pretas, manjericão e um fio de azeite extravirgem.", preco: 54.9 },
  ],
  doces: [
    { nome: "Romeu e Julieta", descricao: "Queijo minas com goiabada.", preco: 44.9 },
    { nome: "Chocolate", descricao: "Chocolate ao leite e granulado.", preco: 42.9 },
    { nome: "Prestígio", descricao: "Chocolate ao leite, leite condensado e coco ralado.", preco: 45.9 },
    { nome: "Banoffe Especial", descricao: "Doce de leite artesanal, bananas fatiadas, chantilly leve e um toque de canela.", preco: 46.9 },
    { nome: "Sensação de Morango", descricao: "Base de chocolate ao leite cremoso, morangos frescos e raspas de chocolate.", preco: 48.9 },
  ],
};

const Cardapio: React.FC<CardapioProps> = ({ onSelectCategory, onAdd, onNext }) => {
  const [categoriaAtual, setCategoriaAtual] = useState<Categoria>("salgadas");

  const handleCategoriaClick = (cat: Categoria) => {
    setCategoriaAtual(cat);
    onSelectCategory?.(cat);
  };

  const handleAvancar = () => onNext();

  return (
    <div className="cardapio">
      <header>
        <img src="/public/teste2.jpeg" alt="Feitoza's Pizza" className="logo-top" />
        <h1>Cardápio</h1>
      </header>

      {/* ✅ Botões de categoria */}
      <div className="categorias">
        <button
          className="btn-red categoria-btn"
          onClick={() => handleCategoriaClick("salgadas")}
        >
          Salgadas
        </button>

        <button
          className="btn-red categoria-btn"
          onClick={() => handleCategoriaClick("especiais")}
        >
          Especiais
        </button>

        <button
          className="btn-red categoria-btn"
          onClick={() => handleCategoriaClick("doces")}
        >
          Doces
        </button>
      </div>

      <div className="produtos-lista">
        {produtosPorCategoria[categoriaAtual].map((produto, idx) => (
          <div key={idx} className="produto">
            <div className="nome">{produto.nome}</div>
            {produto.descricao && <div className="descricao">{produto.descricao}</div>}
            <div className="preco">R$ {produto.preco.toFixed(2)}</div>

            <button
              className="btn-red pequeno"
              onClick={() => onAdd(produto)}  // ✅ adiciona ao carrinho
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Botão para ir ao pedido */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button className="btn-red" onClick={handleAvancar}>
          Ver Pedido
        </button>
      </div>
    </div>
  );
};

export default Cardapio;
