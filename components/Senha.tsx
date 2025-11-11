import React, { useState } from "react";

interface SenhaProps {
  onNext: () => void;
}

const Senha: React.FC<SenhaProps> = ({ onNext }) => {
  const [etapa, setEtapa] = useState<number>(1);
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const enviarToken = () => {
    if (email) setEtapa(2);
  };

  const validarCodigo = () => {
    if (codigo) setEtapa(3);
  };

  const redefinirSenha = () => {
    if (novaSenha === confirmaSenha && novaSenha) setEtapa(4);
  };

  return (
    <div className="senha">
      <img src="/logo.png" alt="Feitoza's Pizza" className="logo-top" />

      {etapa === 1 && (
        <>
          <h1>Recupere sua senha</h1>
          <label>E-mail:</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn-red" onClick={enviarToken}>
            Próximo
          </button>
        </>
      )}

      {etapa === 2 && (
        <>
          <h1>Recupere sua senha</h1>
          <p>Token enviado para o e-mail {email.replace(/(.{2}).+@/, "$1****@")}</p>
          <label>Digite o código:</label>
          <input
            type="text"
            placeholder="Código"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
          <p className="link" onClick={enviarToken}>
            Não recebeu o código? Clique aqui.
          </p>
          <button className="btn-red" onClick={validarCodigo}>
            Próximo
          </button>
        </>
      )}

      {etapa === 3 && (
        <>
          <h1>Recupere sua senha</h1>
          <label>Digite sua nova senha:</label>
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <label>Confirme sua nova senha:</label>
          <input
            type="password"
            placeholder="Confirme a senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />
          <button
            className="btn-red"
            disabled={novaSenha !== confirmaSenha || !novaSenha}
            onClick={redefinirSenha}
          >
            Próximo
          </button>
        </>
      )}

      {etapa === 4 && (
        <>
          <h1>Senha redefinida com sucesso</h1>
          <img src="/logo.png" alt="Feitoza's Pizza" className="logo-top" />
          <button className="btn-red" onClick={onNext}>
            Voltar para tela de login
          </button>
        </>
      )}
    </div>
  );
};

export default Senha;