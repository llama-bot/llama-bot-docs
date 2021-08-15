---
sidebar_position: 1
---

# Overview

Firebase http API for the [llama bot](https://github.com/llama-bot/llama-bot).

## Endpoints

### Auhentication

#### `/login`

Login using discord OAuth2

#### `/logout`

Logout from account

#### `/auth`

Discord OAuth2 callback

### REST

#### `/users/new`

Create a new user

#### `/users/find`

Find a user

#### `/users`

List all users in the database

#### `/list-servers`

List all servers in the database

## Special thanks

- [luizkc](https://github.com/luizkc) for discord oauth2 authentication ([repo](https://github.com/luizkc/firebase-discord-oauth2-example))
