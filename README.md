# Nome do Projeto - Tocloc
Sistema de gerenciamento de locais esportivos.

1. npm install - para instalar dependências

2. Crie um arquivo .env na raiz do projeto, para configurar as variáveis de ambiente no formato:

SUPABASE_URL=<sua-url-supabase>
SUPABASE_KEY=<sua-chave-supabase>
JWT_SECRET=<chave-jwt>

3. Execute o servidor - npm start

4. Adicione o arquivo gitignore com o seguinte código:

# Dependências instaladas
node_modules/

# Arquivos de logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Arquivos de ambiente
.env

# Build ou arquivos gerados
dist/
build/

# Sistema operacional (opcional)
.DS_Store
Thumbs.db

4. Testar API com Postman ou Insomnia:

Acesse as rotas disponíveis pelo endereço http://localhost:3000.(Front-End) ou http://localhost:3001.(Back-End)
