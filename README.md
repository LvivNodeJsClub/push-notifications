# Push notifications

## Setup demo application

### Install

```
npm i
```

### Configure application

You can generate the VAPID key pair by running the command below from the root of your project directory:

```
sh ./generate.sh
```
or 
```
./node_modules/.bin/web-push generate-vapid-keys
```

Copy the public and private key and paste them into a new `.env` file in the root of your project directory as shown below:

```
// .env
PORT=3000
PUBLIC_VAPID_KEY=<your public key>
PRIVATE_VAPID_KEY=<your private key>
```

also, you should update `/public/sw.js` and `scripts/main.js`

#### Start

```
npm start
```

## Demo


### Enable push notifications

- Open `http://localhost:3000/` and press `Enable Push Messaging`
- Allow notifications
- Open `http://localhost:3000/test` to show the list of subscribers
  - in a few seconds, you should get a push notification from the server
