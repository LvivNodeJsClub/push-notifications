require('dotenv').config({ path: '.env' });

const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const users = new Map();

app.post('/subscribe', (req, res) => {
  users.set(req.body.keys.auth, req.body);
  res.status(201).json({});
});

app.get('/test', (req, res) => {
  const payload = 'Push notifications with Service Workers'

  users.forEach(user =>
    setTimeout(() => {
      webPush.sendNotification(user, payload)
        .catch(error => console.error(error))
    }, Math.floor(Math.random() * Math.floor(5000)))
  );

  res.status(200).json(Array.from(users));  
});

app.listen(process.env.PORT, function () {
  console.log(`Listening on port ${process.env.PORT}`);
});
