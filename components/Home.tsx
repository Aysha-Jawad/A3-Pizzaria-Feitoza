import React from "react";

interface HomeProps {
  onNext: () => void;
}

const Home: React.FC<HomeProps> = ({ onNext }) => (
  <div className="home">
    <img src="/logo.png" alt="Feitoza's Pizza" className="logo" />
    <h1>Feitoza's Pizza</h1>
    <h2>A melhor Pizzaria da Zona Norte</h2>
    <button className="btn-red" onClick={onNext}>
      Entrar com Login
    </button>
    <button className="btn-red alt" onClick={() => alert("Cadastro por implementar")}>
      Cadastrar-se
    </button>
  </div>
);

export default Home;
