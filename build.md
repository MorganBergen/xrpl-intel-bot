# Set up
First, set up a discord channel or already have a channel decided where to add our bot. Simple copy and paste the following link and authorize:

https://discord.com/api/oauth2/authorize?client_id=1135262119512772758&permissions=8&scope=bot

[discord channel](https://discord.gg/36KRXgwWP)
# Build Instructions

Clone the repository and run

      cd ripple-intern-hackathon-2023
      npm install discord.js
      npm install --save dotenv
      pip3 install openai
      pip3 install chromadb
      pip3 install tiktoken
      pip3 install langchain

Run `nodemon` on the terminal to run the bot 

You will need to create a constants.py and .env file in src directory.

Note: In the `package.json` file, make sure the "main" field is pointing to the correct location of index.js
Contact us if you want access to the token in .env)
