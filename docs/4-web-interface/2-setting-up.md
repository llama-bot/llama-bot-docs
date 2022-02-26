# Setting up

This page will teach you how to set up the [Llama bot web Interface](https://github.com/llama-bot/llama-bot-web-interface).

## Steps

### Pre-requirements

- Node.js version 14 or greater (version 16 is recommended)
- yarn
- Discord account
- Google account
- Payment method (No payment required for light usage. More info [here](https://firebase.google.com/pricing))

### Discord

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create an application. Select one if you already have it. You may use the same application used by the discord bot.
2. Go to OAuth2 tab.
3. Add the following redirects:

   - testing (http): `http://localhost:5000/api/auth`
   - production (https): `https://<YOUR_SITE_NAME_HERE>/api/auth` (e.g. `https://llama.developomp.com/api/auth`)

### Firebase

1.  [Create](https://console.firebase.google.com) a firebase project. Select one if you already have it. It must be the same project used by the discord bot. Make sure it is using the [blaze plan](https://firebase.google.com/pricing).
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

2. Create `functions/src/secret.json`.

   ```json title="functions/src/secret.json"
   {
     "clientID": "DISCORD_CLIENT_ID_HERE", // Discord OAuth2 Client ID
     "clientSecret": "DISCORD_CLIENT_SECRET_HERE", // Discord OAuth2 Client Secret
     "secret": "SECRET_COOKIE_KEY_HERE" // secret key to be used for express session security
   }
   ```

3. Visit [this link](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk), select your firebase project and download the firebase admin sdk key by pressing the "Generate new private key" button. Rename the downloaded file to `firebase-adminsdk.json` and put it in the `functions/src/` directory.

4. Install firebase tools.

   ```bash
   yarn global add firebase-tools
   ```

5. Select your firebase project. You must run this command in the project root.

   ```bash
   firebase use <FIREBASE_PROJECT_ID_HERE>
   ```

6. Go to the `functions` directory and install the dependencies.

   ```bash
   yarn install
   ```

7. Build production code.

   ```bash
   yarn build
   ```

### Frontend

1. Go to the `frontend` directory and install the dependencies.

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

After building the backend and the frontend code, run the following command to start a local test server:

```bash
firebase serve
```

### Deployment

Deploying the code to production is as simple as running the following command:

```bash
firebase deploy
```

The deployment could take a while so be patient.

Deploying frontend code only:

```bash
firebase deploy --only hosting
```

Deploying backend code only:

```bash
firebase deploy --only functions
```

### Automated deployment

If you are using github, you can easily automate the deployment process.
The web interface repository is configured to use [Github action](https://github.com/features/actions) to automatically deploy changes made to the `master` branch.
We recommend you do the development in the `dev` branch and put production code in the `master` branch.

Go to repository Settings > Secrets (side bar) > Actions (dropdown)<br />
and create the following secrets by clicking the New repository secret button.

- `FIREBASE_TOKEN`

You can get this by running the following command:

```bash
firebase login:ci
```

- `FIREBASE_PROJECT`

This is the firebase project ID you are using. It should be inside the `.firebaserc` file.

## More info

- [discord developers documentation](https://discord.com/developers/docs)
- [firebase admin sdk documentation](https://firebase.google.com/docs)
- [firebase functions documentation](https://firebase.google.com/docs/functions/typescript)
