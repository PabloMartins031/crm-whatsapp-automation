class Messages {
  messages = {
    "0": `
🤖 Bem-vindo ao Chatbot CNX

Digite uma opção:

1️⃣ - Conhecer a empresa
2️⃣ - Solicitar orçamento
3️⃣ - Ver serviços
4️⃣ - Falar com um atendente
0️⃣ - Voltar ao menu principal
`,

    "1": `
🏢 Sobre a empresa

Somos especialistas em:
✅ Desenvolvimento de Sites
✅ Landing Pages
✅ Sistemas Web
✅ Automação de WhatsApp
`,

    "2": `
💰 Orçamento

Informe:
• Seu nome
• Tipo de projeto
• Objetivo do projeto

Nossa equipe entrará em contato.
`,

    "3": `
🚀 Serviços

1. Sites Institucionais
2. Landing Pages
3. Sistemas Web
4. Automações
5. Marketing Digital
`,

    "4": `
👨‍💻 Atendimento

Um atendente entrará em contato em breve.
`,

    "10": `
❌ Opção inválida.

Digite um número válido do menu.
`
  };

  getMessage(index = 0) {
    return this.messages[index.toString()] || this.messages["10"];
  }
}

module.exports = new Messages();