import React, { useState } from "react";
import "./styles.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Cardapio from "./components/Cardapio";
import Pagamento from "./components/Pagamento";
import Pedido from "./components/Pedido";
import Senha from "./components/Senha";
import Dashboards from "./components/Dashboards";
import PedidoConfirmado from "./components/PedidoConfirmado";

type Tela =
  | "home"
  | "login"
  | "cadastro"
  | "cardapio"
  | "pagamento"
  | "pedido"
  | "senha"
  | "dashboards"
  | "pedido_confirmado";

interface Produto {
  nome: string;
  descricao?: string;
  preco: number;
}

interface ItemPedido {
  descricao: string;
  quantidade: number;
  valorUnitario: number;
}

const App: React.FC = () => {
  const [tela, setTela] = useState<Tela>("home");
  const [itens, setItens] = useState<ItemPedido[]>([]);

  // Estado para guardar o ID que veio do backend
  const [idPedidoConfirmado, setIdPedidoConfirmado] = useState<string | null>(
    null
  );

  const total = itens.reduce(
    (acc, item) => acc + item.quantidade * item.valorUnitario,
    0
  );

  const adicionarItem = (produto: Produto) => {
    setItens((prev) => {
      const existente = prev.find((i) => i.descricao === produto.nome);

      if (existente) {
        return prev.map((i) =>
          i.descricao === produto.nome
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }

      return [
        ...prev,
        {
          descricao: produto.nome,
          quantidade: 1,
          valorUnitario: produto.preco,
        },
      ];
    });
  };

  const proximo = (proximaTela: Tela) => setTela(proximaTela);
  const sair = () => setTela("home");

  // Função de Sucesso: Recebe o ID, limpa o carrinho e muda a tela
  const finalizarPedidoComSucesso = (id: string) => {
    setIdPedidoConfirmado(id);
    setItens([]);
    proximo("pedido_confirmado");
  };

  return (
    <div className="app-container">
      <div className="topbar">
        {tela !== "home" && tela !== "pedido_confirmado" && (
          <button className="btn-sair" onClick={sair}>
            Sair
          </button>
        )}
        {tela !== "home" && tela !== "pedido_confirmado" && (
          <span className="btn-proximo" onClick={() => proximo("dashboards")}>
            Próximo
          </span>
        )}
      </div>

      {tela === "home" && (
        <Home
          onNext={() => proximo("login")}
          onCadastro={() => proximo("cadastro")}
        />
      )}

      {tela === "login" && (
        <Login
          onNext={() => proximo("cardapio")}
          onEsqueciSenha={() => proximo("senha")}
        />
      )}

      {tela === "cadastro" && <Cadastro onNext={() => proximo("login")} />}

      {tela === "cardapio" && (
        <Cardapio onAdd={adicionarItem} onNext={() => proximo("pedido")} />
      )}

      {tela === "pedido" && (
        <Pedido
          itens={itens}
          total={total}
          onContinuar={() => proximo("cardapio")}
          onNextPagamento={() => proximo("pagamento")}
          onFinalizarComSucesso={() => proximo("pagamento")}
        />
      )}

      {tela === "pagamento" && (
        <Pagamento
          itens={itens}          // ✔ declarado corretamente
          total={total}          // ✔ declarado corretamente
          onFinalizarComSucesso={finalizarPedidoComSucesso} // ✔ declarado
          onVoltarPedido={() => proximo("pedido")}          // ✔ declarado
        />
      )}

      {tela === "senha" && <Senha onNext={() => proximo("login")} />}

      {tela === "dashboards" && <Dashboards />}

      {tela === "pedido_confirmado" && (
        <PedidoConfirmado
          idPedido={idPedidoConfirmado}
          onNext={() => proximo("home")}
        />
      )}
    </div>
  );
};

export default App;
