---
sidebar_position: 2
---

# Setting up

This page will teach you how to set up the [Llama bot web API](https://github.com/llama-bot/llama-bot-web-api).

## Steps

### Pre-requirements

- [Node.js](https://nodejs.org) version 14 or greater
- Discord account
- Google Firebase account

### Discord

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create an application. Select one if you already have it. Using the same application used by the discord bot is recommended.
2. Go to the OAuth2 tab.
3. Add the following redirect URIs:

   - localhost for testing (http only): `http://localhost:5001/<YOUR_FIREBASE_PROJECT_ID_HERE>/us-central1/api/auth`
   - http: `http://us-central1-<YOUR_FIREBASE_PROJECT_ID_HERE>.cloudfunctions.net/api/auth`
   - https: `https://us-central1-<YOUR_FIREBASE_PROJECT_ID_HERE>.cloudfunctions.net/api/auth`

### Firebase

- must be the same project that the llama bot is using

1.  Create a firebase project.

    https://console.firebase.google.com

2.  Create/Select a project. Make sure it is using the [blaze plan](https://firebase.google.com/pricing).
3.  Go to the `Firestore Database` tab and enable it (using production mode is highly recommended).

### Local

1. Clone the [llama-bot-web-api](https://github.com/llama-bot/llama-bot-web-api) repository

   Using HTTPS

   ```bash
   git clone https://github.com/llama-bot/llama-bot-web-api.git
   ```

   Using SSH:

   ```bash
   git clone git@github.com:llama-bot/llama-bot-web-api.git
   ```

2. Edit `functions/src/config.json`.

   ```json title="functions/src/config.json"
   {
     "region": "FIREBASE_FUNCTIONS_REGION_HERE", // Region where firebase functions is hosted in. Example: us-central1
     "scopes": ["DISCORD", "SCOPES", "HERE"] // Discord OAuth2 scopes. Example: ["identify", "email", "guilds"]
   }
   ```

3. Create `functions/src/secret.json` and fill in the data.

   ```json title="functions/src/secret.json"
   {
     "projectID": "FIREBASE_PROJECT_ID_HERE", // Firebase project ID
     "clientID": "DISCORD_CLIENT_ID_HERE", // Discord OAuth2 Client ID
     "clientSecret": "DISCORD_CLIENT_SECRET_HERE", // Discord OAuth2 Client Secret
     "secret": "SECRET_COOKIE_KEY_HERE" // secret to be used for express session
   }
   ```

4. Go to [this link](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk), select your firebase project and download the firebase admin sdk key by pressing the "Generate new private key" button. Rename it to `firebase-adminsdk.json` and put it in `functions/src/`.

5. Install firebase cli tools.

   ```bash
   npm install -g firebase-tools
   ```

6. Select firebase project

   ```bash
   firebase use <firebase-project-id>
   ```

7. Go to `functions` directory and install necessary dependencies.

   ```bash
   npm install
   ```

## Testing

1. Start local test server by running the following command in the `functions` directory.

   ```bash
   npm run serve
   ```

2. Open locally served API and log in with your discord account.

   :::warning
   HTTP**S** won't work when serving locally. Use HTTP instead.
   :::

   Login test URI: `http://localhost:5001/<YOUR_FIREBASE_PROJECT_ID_HERE>/us-central1/api/login`

3. If everything is set up correctly, this should have added a new user in firestore database.

### Deploying

Deploying the functions to production is as simple as running the following command:

```bash
firebase deploy
```

Production API URL: `https://us-central1-<YOUR_FIREBASE_PROJECT_ID_HERE>.cloudfunctions.net/api`.

## More info

- discord developers documentation: https://discord.com/developers/docs
- firebase admin sdk documentation: https://firebase.google.com/docs
