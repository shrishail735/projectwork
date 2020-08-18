const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const createNotification =(notifications=>{
    return admin.firestore().collection('notifications')
     .add(notifications)
     .then(doc =>console.log('not added',doc));
})
exports.projectCreated = functions.firestore
.document('projects/{projectId}')
.onCreate(doc=>{
   const project=doc.data();

   const notifications={
       content:'added a new project',
       user:`${project.authorFirstName} ${project.authorLastName}`,
       time:admin.firestore.FieldValue.serverTimestamp()
   }

   return createNotification(notifications);
});

exports.userJoined = functions.auth.user()
 .onCreate(user=>{
     return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc=>{
        const newUser = doc.data();
        const notifications={
            content:'joined partyyy',
            user:`${newUser.userFirstName} ${newUser.userLastName}`,
            time:admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notifications);

      })
 })
