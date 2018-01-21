import * as functions from 'firebase-functions'
//import * as admin from 'firebase-admin'

//admin.initializeApp(functions.config().firebase)

exports.checkWorking = functions.https.onRequest((req, res) => {
	res.status(200).json({ status: 'working' })
})