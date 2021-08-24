---
sidebar_position: 2
---

# Setting up

> Use the [dev branch](https://github.com/llama-bot/llama-bot/tree/dev) (javascript) instead of the master branch (python).

This page will teach you how to set up the [llama discord bot](https://github.com/llama-bot/llama-bot).

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

1. Create a new application from the [Discord Developer Portal](https://discord.com/developers/applications). Select one if you already have it. Be cautious though, since this operation is **NOT REVERSIBLE**.
2. Make application a bot.
3. Copy the bot token. This will be used during the [Server](#server) setup.

### Firebase

1. Create a firebase project.

   https://console.firebase.google.com

2. Create firestore database (production mode is highly recommended).
3. [Generate and download](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) the service account key. This will be used during the [Server](#server) setup.

### Bot

:::info
Assumes UNIX-like environment (Linux, BSD, Mac, etc.)
:::

1. Clone the llama bot [repository](https://github.com/llama-bot/llama-bot) and `cd` into it.

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

4. Create `secret` directory in the `src` directory, rename firebase admin key generated during the [Firebase](#firebase) setup to `firebase-adminsdk.json`, and put it in the `secret` directory.

TODO: systemd and/or auto restart/reload pm2?

## Testing

After following all the [steps](#steps), run the following command to start the bot:

```bash
yarn start
```

If everything is set up correctly, this should start the bot and load all the cogs. [Web Interface](/docs/web-interface/overview) will not work if the [API](/docs/api/overview) is not set up.

## More info

- discord developers documentation: https://discord.com/developers/docs
- discord API's javascript implementation [documentation](https://discord.js.org/#/docs), [guide](https://discordjs.guide), and bot [framework documentation](https://sapphiredev.github.io/framework)
- firebase admin sdk documentation: https://firebase.google.com/docs
