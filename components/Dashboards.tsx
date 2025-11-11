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
        <img src="/charts/barras.png" alt="Gráfico Barras" />
        <img src="/charts/pagamento.png" alt="Métodos de Pagamento" />
        <img src="/charts/pizzas.png" alt="Pizzas mais pedidas" />
        <img src="/charts/vendas.png" alt="Vendas por mês" />
      </div>
    </div>
  );
};

export default Dashboards;