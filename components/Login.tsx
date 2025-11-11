import React from "react";

interface LoginProps {
  onNext: () => void;
  onEsqueciSenha: () => void;
}

const Login: React.FC<LoginProps> = ({ onNext, onEsqueciSenha }) => (
  <div className="login">
    <h1>Login</h1>
    <input type="text" placeholder="Usuário" />
    <input type="password" placeholder="Senha" />
    <div className="link" onClick={onEsqueciSenha}>
      Esqueci minha senha
    </div>
    <button className="btn-red" onClick={onNext}>
      Próximo
    </button>
  </div>
);

export default Login;
