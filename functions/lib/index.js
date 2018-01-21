"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
//import * as admin from 'firebase-admin'
//admin.initializeApp(functions.config().firebase)
exports.checkWorking = functions.https.onRequest((req, res) => {
    res.status(200).json({ status: 'working' });
});
//# sourceMappingURL=index.js.map