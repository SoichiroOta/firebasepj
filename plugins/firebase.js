import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
  {
      apiKey: "AIzaSyBUIBmd2y4OL9qT0WPAXj2lhq0QX6yAEo8",
      authDomain: "fir-pj-61450.firebaseapp.com",
      projectId: "fir-pj-61450",
      storageBucket: "fir-pj-61450.appspot.com",
      messagingSenderId: "949345811900",
      appId: "1:949345811900:web:61dc51c6a17174368f3fb9",
      measurementId: "G-LFPPV90S4S"
    }
  )
}
  
export default firebase