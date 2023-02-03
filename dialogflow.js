// importing dialogflow library
const dialogflow = require('dialogflow');

// importing the file containing the dialogflow configs
const configs = require('./configs/agent.json');

// creating a session for the application according to the credentials
const sessionClient = new dialogflow.SessionsClient({
    projectId: configs.project_id,
    credentials: { private_key: configs.private_key, client_email: configs.client_email }
});

// function to encapsulate sending messages from telegram to dialogflow
async function sendMessage(chatId, message) {
    // creating or recovering user session
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);

    // object to assemble the request for dialogflow
    const request = {
        session: sessionPath,
        queryInput: {}
    };

    // request for text type
    const textQueryInput = { text: { text: message, languageCode: 'pt-BR' } };

    // request for event type
    const eventQueryInput = { event: { name: 'start', languageCode: 'pt-BR' } }

    // checking if the message sent was a start if it is mounts an event calling the 'start' action
    // remember that this action needs to be registered in dialogflow to be able to call it
    request.queryInput = message === '/start' ?  eventQueryInput : textQueryInput;

    // request responses to dialogflow
    const responses = await sessionClient.detectIntent(request);

    // dialogflow response result
    const result = responses[0].queryResult;

    // returning object to be used in index.js file
    return { text: result.fulfillmentText, intent: result.intent.displayName, fields: result.parameters.fields };
}

// exporting sendMessage function
module.exports.sendMessage = sendMessage