Daily Learning

# Building a ChatbotFit on Telegram with JavaScript and NodeJS

Project developed at Bootcamp SPTech Development Fullstack with instruction from specialist [Carlos Victor Gomes](https://github.com/carlosvictor/ "Carlos Victor Gomes"). </br>
Learning to develop a “Chatbot on Telegram with JavaScript and NodeJS” project, practicing and applying the concepts of integration and searches for videos of physical exercises on YouTube using a natural language understanding platform called DialogFlow.

[LICENCE](./LICENCE)

See [original repository](https://github.com/carlosvictor/dio-live-coding-chatbot).

Instruction

1 To install NodeJS
 [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) (Linux e Mac) -Easier to manage NodeJS versions on machine
 [https://nodejs.org/en/](https://nodejs.org/en/) (Windows, Linux e Mac)

2 IDE for development
 [https://code.visualstudio.com/](https://code.visualstudio.com/)

3 NPM (NodeJS Package Manager)
 [https://www.npmjs.com](https://www.npmjs.com)

4 Telegram
 [https://web.telegram.org/](https://web.telegram.org/)

Creating the bot
 Sign up for Telegram (You can use web, desktop or mobile client)
 Open the app or go to the website
 Search for @BotFather and start the conversation
 Submit the /newbot command and run the instructions
 Store the token sent by @BotFather (We will use it in the code)

5 Bibliotecas utilizadas no projeto
 [https://www.npmjs.com/package/youtube-node](https://www.npmjs.com/package/youtube-node) (Searches on Youtube)
 [https://www.npmjs.com/package/dialogflow](https://www.npmjs.com/package/dialogflow) (Communication with Dialogflow)
 [https://www.npmjs.com/package/node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api) (Communication with Telegram)

6 Criando o fluxo de conversa no Dialogflow
 [https://dialogflow.com/](https://dialogflow.com/)
Create a new agent
 Choose an existing project or create a new project
 Click on the gear to configure the agent
 Click on the service id, you will be redirected to the GCP panel, click on the 3 dots below actions and create a json type key
 After the key is downloaded, replace the contents of the agent.json file with the contents of your key
 Create a new intent called "Specific Workout"
 Add training phrases with some body parts
 Define entities of type "body" and their synonyms

7 To generate credentials
 [https://console.developers.google.com/start/api?id=youtube](https://console.developers.google.com/start/api?id=youtube) (Youtube)
 [https://console.cloud.google.com/iam-admin/serviceaccounts](https://console.cloud.google.com/iam-admin/serviceaccounts) (Dialogflow) Remember to go to the service account created by Dialogflow and generate your json file with the credentials

8 To run the project
 Clone the repository to an operating system folder
 Run the `npm install` command inside the project's root folder to download the dependencies
 Replace agent and youtube credentials files
 Run the `npm start` command inside the project's root folder to run the code.
