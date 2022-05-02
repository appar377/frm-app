import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {    
      apiKey: "AIzaSyAXXlHMM5L2X1nUuzBcWQMMTuHyqphESFQ",
      authDomain: "frmapp-b8c6f.firebaseapp.com",
      projectId: "frmapp-b8c6f",
      storageBucket: "frmapp-b8c6f.appspot.com",
      messagingSenderId: "505671177459",
      appId: "1:505671177459:web:6dc648ebf56b773e5b5386",
      measurementId: "G-X85M2S92SX"
    }
  )
}
  
export default firebase