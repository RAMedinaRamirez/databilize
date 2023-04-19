const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
const app = express();

const serviceAccount = require("./credenciales.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://databilize-75989-default-rtdb.firebaseio.com"
});

app.use(require("./routes/roles.routes"));

exports.app = functions.https.onRequest(app);
