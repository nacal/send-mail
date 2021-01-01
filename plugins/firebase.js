import firebase from 'firebase'

const config = {
  apiKey:
    'AAAASWtag7U:APA91bFkwjzAQR3nDJaQw-cfTZU_Z8teUigPmypi5R8K5z4Osd2drSxdaY5T7r25UDGSuBBKJRw2hm6bAuIs1MsyLxORzsSxoWymPHlhLCkzZB_3HO-lE4vntCsN7c3lDR4zimi_gmI3',
  authDomain: 'send-mail-e309e.firebaseapp.com',
  databaseURL: 'https://send-mail-e309e.firebaseio.com',
  projectId: 'send-mail-e309e',
  storageBucket: 'send-mail-e309e.appspot.com',
  messagingSenderId: '315333706677',
}
firebase.initializeApp(config)
export const functions = firebase.functions()
