// importing telegram api library
const TelegramBot = require('node-telegram-bot-api');

// importing our file that makes the call to dialogflow
const dialogflow = require('./dialogflow');

// importing our module that does the search on youtube
const youtube = require('./youtube');

// token received by bot father
const token = '6107537755:AAEFJAhSWgw2iTjgrgrf1kZlDJ52kyjM0Yw';

// new instance of telegram
const bot = new TelegramBot(token, { polling: true });

// listens to messages sent by users
bot.on('message', async (msg) => {
    
    // user chat id
    const chatId = msg.chat.id;

    // dialogflow answer
    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

    // text from dialogflow response
    let textResponse = dfResponse.text;
    
    // check intent from dialogflow response
    if (dfResponse.intent === 'Specific training') {
        // modifies the text for the data returned from the search performed on youtube
        // remember that to access the body field within fields it had to be defined as an entity in dialogflow
        textResponse = await youtube.searchVideoURL(textResponse, dfResponse.fields.corpo.stringValue);
    }
    
    // send message to telegram user
    bot.sendMessage(chatId, textResponse);
});