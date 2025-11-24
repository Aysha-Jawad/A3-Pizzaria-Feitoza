const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000; // Porta do seu microsserviço de pedidos (conforme URL no frontend)

// --- Simulação de Banco de Dados ---
// Armazenamento em memória (não persistente)
let pedidos = [];
let nextId = 1001; // ID inicial para os pedidos

// --- Middlewares ---

// Permite requisições de outras origens (seu frontend)
// IMPORTANTE: Configure a origem real do seu frontend aqui para segurança!

app.use(
  cors({
    origin: "*",
    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],
    allowedHeaders: ["Content-Type"],
  })
);



// Habilita o Express a receber e parsear JSON no corpo da requisição (payload)
app.use(express.json());

// --- Funções de Ajuda ---

// Função simples para gerar um ID
const generateId = () => {
    const id = `PEDIDO-${nextId}`;
    nextId++;
    return id;
};

// --- Rotas da API ---

// Rota GET simples para verificar se o servidor está ativo
app.get('/', (req, res) => {
    res.send('Microsserviço de Pedidos rodando!');
});

// Rota POST para CRIAR/FINALIZAR um novo pedido
app.post('/api/pedidos', (req, res) => {
    const novoPedidoData = req.body;

    // 1. Validação simples dos dados recebidos
    if (!novoPedidoData.itens || !Array.isArray(novoPedidoData.itens) || novoPedidoData.itens.length === 0) {
        return res.status(400).json({ 
            message: 'O pedido deve conter itens.',
            details: 'O array "itens" está faltando ou está vazio.'
        });
    }

    // 2. Processamento e "salvamento" (em memória)
    const novoPedido = {
        id: generateId(),
        data: new Date().toISOString(),
        ...novoPedidoData, // Inclui itens e total
        status: 'Finalizado' 
    };

    pedidos.push(novoPedido);
    console.log(`[${novoPedido.data}] Novo pedido finalizado: ${novoPedido.id}`);

    // 3. Resposta de Sucesso para o Frontend
    // O status 201 (Created) é o padrão para criação de recursos
    return res.status(201).json({
        message: 'Pedido finalizado com sucesso!',
        id: novoPedido.id, // Retorna o ID, útil para redirecionamento no frontend
        total: novoPedido.total
    });
});

// Rota GET para listar todos os pedidos (opcional, para testes)
app.get('/api/pedidos', (req, res) => {
    return res.status(200).json(pedidos);
});


// --- Inicialização do Servidor ---
app.listen(PORT, () => {
    console.log(`🚀 Microsserviço de Pedidos rodando em http://localhost:${PORT}`);
   
});