import React from "react";
import "./Home.css";

interface HomeProps {
  onNext: () => void;
  onCadastro: () => void;
}

const Home: React.FC<HomeProps> = ({ onNext, onCadastro }) => (  
  <div className="home-container">

    <div className="mancha mancha-vermelha"></div>
    <div className="mancha mancha-marrom"></div>
    <div className="mancha mancha-marrom-clara"></div>
    
    <header className="banner">
      <button
        className="btn-colaboradores"
        onClick={() => alert("Área de colaboradores em desenvolvimento")}
      >
        Colaboradores
      </button>

      <div className="conteudo">
        <img src="/icons/logo.png" alt="Feitoza's Pizza" className="logo-banner" />
        <h1 className="titulo">Feitoza's Pizza</h1>
        <h2 className="subtitulo">A melhor Pizzaria da Zona Norte</h2>

        <div className="botoes">
          <button className="btn-principal" onClick={onNext}>
            Entrar com Login
          </button>
          <button
            className="btn-principal alt"
            onClick={onCadastro}  
          >
            Cadastrar-se
          </button>
        </div>
      </div>
    </header>
  </div>
);

export default Home;