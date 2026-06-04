# Chatbot CNX - Documentação de Ajustes

## Resumo das alterações feitas

### 1. Atualização do cliente WhatsApp
- Em `index.js`, a instância `new Client(...)` passou a incluir opções do Puppeteer:
  - `headless: false`
  - `args: ['--no-sandbox', '--disable-setuid-sandbox']`
- Isso força o Chromium a abrir em modo visível e melhora a compatibilidade de inicialização.

### 2. Eventos de erro adicionados
- Em `index.js`, adicionei listeners para capturar falhas de autenticação e desconexões:
  - `auth_failure`
  - `disconnected`
- Esses eventos ajudam a diagnosticar problemas de sessão com o WhatsApp Web.

### 3. Reset de sessão LocalAuth
- O diretório de sessão `.wwebjs_auth` foi renomeado para `.wwebjs_auth_old`.
- Isso faz com que o bot gere um novo QR code e crie uma nova sessão, evitando usar dados de sessão corrompidos.

## Por que isso foi necessário
- O erro original era do `puppeteer-core`: `ProtocolError: Protocol error (Runtime.callFunctionOn): Execution context was destroyed.`
- Esse erro ocorre durante a inicialização do WhatsApp Web em Puppeteer e não é causado pelo seu código de menu.
- O ajuste no modo Puppeteer e o reset de sessão ajudam a forçar uma nova inicialização completa.

## Como testar
1. Abra o terminal na pasta do projeto:
   - `cd "c:\Users\Pablo Martins\Documents\Programação\Chatbot-cnx"`
2. Execute o bot:
   - `node index.js`
3. Observe o navegador do Puppeteer e leia o QR code se solicitado.
4. Caso ocorra erro de autenticação, verifique as mensagens no console.

## Observações finais
- O projeto é Node.js, então `venv` não é necessário.
- Se precisar usar uma versão diferente do Node, prefira `nvm`, `volta`, ou `npx node@20 index.js`.
- O principal ponto de atenção agora é a inicialização do `whatsapp-web.js` com Puppeteer e o estado da sessão.
