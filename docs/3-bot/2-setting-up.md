---
sidebar_position: 2
---

# Setting up

This page will teach you how to set up the [llama discord bot](https://github.com/llama-bot/llama-bot).

Result:<br />
![example image of bot usage](/img/example.png)

## Steps

### Pre-requirements

- Python version 3.9 or greater
- Discord account
- Google Firebase account
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

### Server

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

2. Install python dependencies.

   ```bash
   pip install -r requirements.txt
   ```

3. Create `secrets` directory in the `bot` directory.
4. In the `secrets` directory, create `secret.json` and put the discord bot token generated during the [Discord](#discord) setup.

   ```json title="bot/secret.json"
   {
     "token": "<DISCORD_BOT_TOKEN_HERE>"
   }
   ```

5. Rename firebase admin key generated during the [Firebase](#firebase) setup to `firebase-adminsdk.json`, and put it in the `secrets` directory.

## Testing

After following all the [steps](#steps), `cd` into the `bot` directory and run the following command:

```bash
python llama.py
```

If everything is set up correctly, this should start the bot and load all the cogs. [Web Interface](/docs/web-interface/overview) will not work if the [API](/docs/api/overview) is not set up.

## More info

- discord developers documentation: https://discord.com/developers/docs
- [discord python API](https://github.com/Rapptz/discord.py) documentation: https://discordpy.readthedocs.io
- firebase admin sdk documentation: https://firebase.google.com/docs
