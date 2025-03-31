const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Добро пожаловать!', {
    reply_markup: {
      keyboard: [
        [{text: 'Открыть приложение', web_app: {url: 'https://your-app.netlify.app'}}]
      ]
    }
  });
}); 