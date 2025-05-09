# Sistema de Gerenciamento de Locais Esportivos
Projeto acadêmico desenvolvido durante a disciplina de Desenvolvimento Web, com o objetivo de construir um sistema fullstack para o gerenciamento de quadras e espaços esportivos.

## Funcionalidades
Cliente (Usuário)
- Reservar espaços esportivos.
- Visualizar suas reservas ativas.
- Confirmar e Cancelar reservas.

Admin (Proprietário do local)
- Cadastrar novos locais esportivos.
- Editar informações dos espaços existentes.
- Disponibilizar horários para reservas.
- Editar ou cancelar reservas.
- Visualizar e gerenciar todos os agendamentos.

## Tecnologias Utilizadas
- **Frontend:** React.js + JavaScript + Tailwind CSS  
- **Backend:** Node.js  
- **Banco de Dados:** Supabase (relacional)  
- **Testes de API:** Postman
- **Autenticação:** JWT Token
- **Conexão Front e Back:** Axios

## Instalação
1. npm install - para instalar dependências
2. Crie um arquivo .env na raiz do projeto, para configurar as variáveis de ambiente no formato:
    SUPABASE_URL=<sua-url-supabase>
    SUPABASE_KEY=<sua-chave-supabase>
    JWT_SECRET=<chave-jwt>
3. Execute o servidor - npm start
