import React, { useState } from "react";

interface CadastroProps {
  onNext: () => void;
}

const Cadastro: React.FC<CadastroProps> = ({ onNext }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // Aqui você pode adicionar lógica para enviar os dados para o backend
    alert("Cadastro realizado com sucesso!");
    onNext(); // Navega para a próxima tela (ex: login)
  };

  return (
    <div className="cadastro">
      <img src="/logo.png" alt="Feitoza's Pizza" className="logo-top" />
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Telefone:</label>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />

        <label>Endereço:</label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <label>Confirme a Senha:</label>
        <input
          type="password"
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
          required
        />

        <button type="submit" className="btn-red">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;