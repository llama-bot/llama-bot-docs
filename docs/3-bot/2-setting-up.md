---
sidebar_position: 2
---

# Setting up

:::info
This documentation is for the [dev branch](https://github.com/llama-bot/llama-bot/tree/dev) (javascript) instead of the master branch (python).
:::

In this documentation, you will learn how to set up the [llama discord bot](https://github.com/llama-bot/llama-bot).

Result:<br />
![example image of bot usage](/img/example.png)

## Steps

### Pre-requirements

- Node.js 16.6.0+
- [yarn](https://yarnpkg.com)
- A Discord account
- A Google Firebase account
- ~~A sacrifice to be given to the llama gods~~ (no longer needed)

### Discord

1. Create a new application from the [Discord Developer Portal](https://discord.com/developers/applications). Select one if you already have it.
2. Go to the `Bot` tab and convert your application to a discord bot. Be cautious since this operation is **NOT REVERSIBLE**.
3. Copy the bot token. This will be used during the [Server](#server) setup.

### Firebase

1. Create a firebase project.

   https://console.firebase.google.com

2. Enable firestore database (usage of production mode is highly recommended).
3. [Generate and download](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) the service account key. This will be used during the [Server](#server) setup.

### Server

:::info
Assumes UNIX-like environment (Linux, BSD, Mac, etc.)
:::

1. Clone the llama bot [repository](https://github.com/llama-bot/llama-bot) and open it.

   ```bash
   git clone https://github.com/llama-bot/llama-bot.git
   ```

   ```bash
   cd llama-bot
   ```

2. Install dependencies.

   ```bash
   yarn install
   ```

3. Create `.env` file in the project root and put the discord bot token generated during the [Discord](#discord) setup.

   ```text title=".env"
   TOKEN=PUT_YOUR_DISCORD_BOT_TOKEN_HERE
   ```

4. Create `secret` directory in the `src` directory, rename the firebase admin key generated during the [Firebase](#firebase) setup to `firebase-adminsdk.json`, and put it in the `secret` directory.
5. Build the bot.

   ```bash
   yarn build
   ```

6. Install pm2 globally.

   ```bash
   yarn global add pm2
   ```

7. Start the bot.

   ```bash
   pm2 start build/index.js --watch --name "Llama Bot"
   ```

   | Option               | Explanation                                                |
   | -------------------- | ---------------------------------------------------------- |
   | `--watch`            | Auto restart bot if bot files have been changed            |
   | `--name "Llama Bot"` | Set the name of the process so it can be easily recognized |

8. Make the process automatically start on boot.

   ```bash
   pm2 startup
   ```

## More info

- [discord developers documentation](https://discord.com/developers/docs)
- discord API's javascript implementation [documentation](https://discord.js.org/#/docs), [guide](https://discordjs.guide), and bot [framework documentation](https://sapphiredev.github.io/framework)
- [firebase admin sdk documentation](https://firebase.google.com/docs)
- [pm2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start)
