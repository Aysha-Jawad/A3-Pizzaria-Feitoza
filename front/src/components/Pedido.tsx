import React, { useState } from "react"; // Importamos useState

interface ItemPedido {
  descricao: string;
  quantidade: number;
  valorUnitario: number;
}

interface PedidoProps {
  itens: ItemPedido[];
  total: number;
  onContinuar: () => void
  onNextPagamento: () => void
  onFinalizarComSucesso: (idPedido: string) => void; // Por exemplo, retorna o ID do pedido finalizado
}

const Pedido: React.FC<PedidoProps> = ({ itens, total, onContinuar, onFinalizarComSucesso }) => {
  // Estados para gerenciar a chamada à API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // A URL do microsserviço de pedidos
const API_URL = 'http://localhost:3000/api/pedidos';

  // Função que será chamada ao clicar em 'Finalizar pedido'
  async function handleFinalizarPedido() {
    setError(null);
    setLoading(true);

    // 1. Monta o objeto de dados que será enviado para a API
    const dadosDoPedido = {
      itens: itens.map(item => ({
        descricao: item.descricao,
        quantidade: item.quantidade,
        valorUnitario: item.valorUnitario,
      })),
      total: total,
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosDoPedido),
      });

      // 3. Verifica a resposta da API
      if (!response.ok) {
        // Tenta obter a mensagem de erro do backend, se houver
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro ao finalizar pedido. Status: ${response.status}`);
      }

      const pedidoFinalizado = await response.json();
      const idDoPedido = pedidoFinalizado.id || 'ID_NÃO_ENCONTRADO';
      
      onFinalizarComSucesso(idDoPedido); 

    } catch (e: any) {
      console.error("Erro na API:", e);
      setError(e.message || "Não foi possível conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="tela pedido">
      <header>
        <img src="public/teste2.jpeg" alt="Feitoza's Pizza" className="logo-top" />
        <h1>Pedido</h1>
        <div className="total">R$ {total.toFixed(2)}</div>
      </header>
      
      {error && (
        <div style={{ color: 'red', padding: '10px', border: '1px solid red', marginBottom: '10px' }}>
          Erro: {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card form">
      <table className="tabela-pedido">
        <thead>
          <tr>
            <th>Qtde</th>
            <th>Descrição</th>
            <th>Valor Unitário</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {itens.map(({ quantidade, descricao, valorUnitario }, idx) => (
            <tr key={idx}>
              <td>{quantidade}</td>
              <td>{descricao}</td>
              <td>R$ {valorUnitario.toFixed(2)}</td>
              <td>R$ {(quantidade * valorUnitario).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </form>
      
      <div className="botoes-pedido">
        <button 
          className="btn-red" 
          onClick={handleFinalizarPedido}
          disabled={loading || itens.length === 0} // Desabilita se estiver carregando ou sem itens
        >
          {loading ? 'Finalizando...' : 'Finalizar pedido'}
        </button>
        
        <button 
          className="btn-red alt" 
          onClick={onContinuar}
          disabled={loading}
        >
          Continuar comprando
        </button>
      </div>
    </div>
  );
};

export default Pedido;