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

type Tela =
  | "home"
  | "login"
  | "cadastro"
  | "cardapio"
  | "pagamento"
  | "pedido"
  | "senha"
  | "dashboards";

interface ItemPedido {
  descricao: string;
  quantidade: number;
  valorUnitario: number;
}

const App: React.FC = () => {
  const [tela, setTela] = useState<Tela>("home");

  const [itens, setItens] = useState<ItemPedido[]>([]);

  const total = itens.reduce(
    (acc, item) => acc + item.quantidade * item.valorUnitario,
    0
  );

  const proximo = (proximaTela: Tela) => setTela(proximaTela);
  const sair = () => setTela("home");

  return (
    <div className="app-container">
      <div className="topbar">
        {tela !== "home" && (
          <button className="btn-sair" onClick={sair}>
            Sair
          </button>
        )}
        {tela !== "home" && (
          <span className="btn-proximo" onClick={() => proximo("dashboards")}>
            Próximo
          </span>
        )}
      </div>

      {tela === "home" && <Home onNext={() => proximo("login")} />}

      {tela === "login" && (
        <Login
          onNext={() => proximo("cardapio")}
          onEsqueciSenha={() => proximo("senha")}
        />
      )}

      {tela === "cadastro" && (
        <Cadastro onNext={() => proximo("login")} />
      )}

      {tela === "cardapio" && (
        <Cardapio
          onSelectCategory={() => {}}              // ✅ obrigatório
          onNext={() => proximo("pedido")}         // ✅ obrigatório
        />
      )}

      {tela === "pagamento" && (
        <Pagamento
          total={total}
          onNext={() => proximo("pedido")}
        />
      )}

      {tela === "pedido" && (
        <Pedido
          itens={itens}                             // ✅ obrigatório
          total={total}                             // ✅ obrigatório
          onContinuar={() => proximo("cardapio")}   // ✅ obrigatório
          onFinalizar={() => proximo("pagamento")}  // ✅ obrigatório
        />
      )}

      {tela === "senha" && (
        <Senha onNext={() => proximo("login")} />
      )}

      {tela === "dashboards" && <Dashboards />}
    </div>
  );
};

export default App;
