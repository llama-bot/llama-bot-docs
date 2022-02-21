# Setting up

This page will teach you how to set up the [Llama bot web Interface](https://github.com/llama-bot/llama-bot-web-interface).

## Steps

### Pre-requirements

- [Node.js](https://nodejs.org) version 14 or greater (version 16 is recommended)
- yarn
- Discord account
- Google Firebase account
- Payment method (No payment required for light usage. More info [here](https://firebase.google.com/pricing))

### Discord

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create an application. Select one if you already have it. Using the same application used by the discord bot is recommended.
2. Go to the OAuth2 tab.
3. Add the following redirects:

   - testing (http): `http://localhost:5000/api/auth`
   - production (https): `https://<YOUR_SITE_NAME_HERE>/api/auth` (e.g. `https://llama.developomp.com/api/auth`)

### Firebase

1.  [Create](https://console.firebase.google.com) a firebase project. Select one if you already have it. Using the same project usd by the bot is recommended. Make sure it is using the [blaze plan](https://firebase.google.com/pricing).
2.  Go to the `Firestore Database` tab and enable it. Usage of production mode is highly recommended.

### Local

Clone the [llama-bot-web-interface](https://github.com/llama-bot/llama-bot-web-interface) repository.

### Functions

1. Edit `functions/src/config.json`.

   ```json title="functions/src/config.json (default values)"
   {
     "pathPrefix": "/api", // where the API endpoints will be located. Set it to "/" if it's on another domain (example: api.example.com)
     "scopes": ["identify", "email", "guilds"] // Discord OAuth2 scopes.
   }
   ```

   more info about discord OAuth2 scopes can be found in the [discord developers documentation](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes)

2. Create `functions/src/secret.json` and fill in the data.

   ```json title="functions/src/secret.json"
   {
     "clientID": "DISCORD_CLIENT_ID_HERE", // Discord OAuth2 Client ID
     "clientSecret": "DISCORD_CLIENT_SECRET_HERE", // Discord OAuth2 Client Secret
     "secret": "SECRET_COOKIE_KEY_HERE" // secret key to be used for express session security
   }
   ```

3. Visit [this link](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk), select your firebase project and download the firebase admin sdk key by pressing the "Generate new private key" button. Rename it to `firebase-adminsdk.json` and put it in `functions/src/`.

4. Install firebase cli tools.

   ```bash
   yarn global add firebase-tools
   ```

5. Select firebase project. You may have to log in. You must run this command in the project root.

   ```bash
   firebase use <FIREBASE_PROJECT_ID_HERE>
   ```

6. Go to `functions` directory and install necessary dependencies.

   ```bash
   yarn install
   ```

7. Build production code.

   ```bash
   yarn build
   ```

### Frontend

1. Go to the `frontend` directory and install dependencies.

   ```bash
   yarn install
   ```

2. Test with hot reloading.

   ```bash
   yarn dev
   ```

3. Build site for production.

   ```bash
   yarn build
   ```

4. Preview the production build

   ```bash
   yarn preview
   ```

### Testing

:::info
Build backend and frontend code first
:::

1. Start local test server by running the following command:

   ```bash
   firebase serve
   ```

2. Open locally served test site and log in with your discord account.

   [http://localhost:5000](http://localhost:5000) <!-- Docusaurus does not automatically create a link -->

3. If everything is set up correctly, this should have added a new user in firestore database.

### Deployment

:::warning
Make sure to test your code before deploying to production
:::

Deploying the code to production is as simple as running the following command:

```bash
firebase deploy
```

The deployment could take a while so be patient.

To deploy frontend code only:

```bash
firebase deploy --only hosting
```

To deploy backend code only:

```bash
firebase deploy --only functions
```

## More info

- discord developers documentation: https://discord.com/developers/docs
- firebase admin sdk documentation: https://firebase.google.com/docs
