import React from "react";

const Dashboards: React.FC = () => {
  return (
    <div className="dashboards">
      <nav className="menu-top">
        <a href="#">Dashboards</a>
        <a href="#">Pedidos</a>
        <a href="#">Estoque</a>
        <a href="#">Menu</a>
      </nav>

      <div className="graficos-container">
               <div className="grafico-card">
          <img src="/icons/gráfico-barras.jpeg" alt="Gráfico Barras" />
        </div>

        <div className="grafico-card">
          <img src="/icons/metodos_de_pagamento.jpeg" alt="Métodos de Pagamento" />
        </div>

        <div className="grafico-card">
          <img src="/icons/pizzas_mais_pedidas.jpeg" alt="Pizzas mais pedidas" />
        </div>

        <div className="grafico-card">
          <img src="/icons/vendas_por_mês.jpeg" alt="Vendas por mês" />
      </div>
    </div>
  </div>
  );
};

export default Dashboards;