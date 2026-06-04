const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Messages = require('./messages')

// cliente esta usando a estratedia esta utilizando estategia de LocalAuth,que salva ao ler o qrcode salva as informacoes para nao precisar pedir novamente
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
})

// gerador do qrcode
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
})

//depois que o usuario ler o qr code,o console aparece,enquanto estiver logado continuara ativo e protegida
client.once('ready',() => {
    console.log('bot esta pronto!!')
});

client.on('auth_failure', (msg) => {
    console.error('Falha de autenticação:', msg);
});

client.on('disconnected', (reason) => {
    console.error('Desconectado:', reason);
});

// estado que o usuario esta,seja atendimento automatico,seja menubar,seja markAsUncloneable,ou qual opcao ele esteja
const clientState = {}

client.on('message', async (msg) => {
    // localiza o chat pelo id
    const chatId = msg.from;
    

    const body = msg.body.trim().toLowerCase();
    if (body === 'menu' || !clientState[chatId]) {
        // entender que ele esta querendo dizer qual opçao ele quer seja (1,2,3,),e para cada executaremos mais opcoes,caso nao tenha opcao valida tera que retornar ('nao existe essa opçao,coloque opcao valida') >>>>>> 
        // o menu esta no arquivo messages.colocar todas opcoes colocando no pareteteses abaixo  Messages.getMessage(o id do menu com todas opcoes iniciais));

        clientState[chatId] = 'menu';
        return client.sendMessage(chatId, Messages.getMessage(0));
    }
        // Messages.getMessage(colocar o body)
    if (clientState[chatId] === 'menu') {
            return client.sendMessage(chatId, Messages.getMessage(body))
    }

});

client.initialize();