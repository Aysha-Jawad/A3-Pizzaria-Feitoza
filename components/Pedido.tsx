interface ItemPedido {
  descricao: string;
  quantidade: number;
  valorUnitario: number;
}

interface PedidoProps {
  itens: ItemPedido[];
  total: number;
  onContinuar: () => void;
  onFinalizar: () => void;
}

const Pedido: React.FC<PedidoProps> = ({ itens, total, onContinuar, onFinalizar }) => {
  return (
    <div className="pedido">
      <header>
        <img src="/logo.png" alt="Feitoza's Pizza" className="logo-top" />
        <h1>Pedido</h1>
        <div className="total">R$ {total.toFixed(2)}</div>
      </header>
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
      <div className="botoes-pedido">
        <button className="btn-red" onClick={onFinalizar}>
          Finalizar pedido
        </button>
        <button className="btn-red alt" onClick={onContinuar}>
          Continuar comprando
        </button>
      </div>
    </div>
  );
};

export default Pedido;
