import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDGwVWdQCKhiKFjZGnpWjMT4-BSdnLHZOs',
  authDomain: 'school-attendance-71d84.firebaseapp.com',
  projectId: 'school-attendance-71d84',
  storageBucket: 'school-attendance-71d84.appspot.com',
  messagingSenderId: '180804781119',
  appId: '1:180804781119:web:17cf627f661b2dfd46e48a',
};

//initialize your database
const app = firebase.initializeApp(firebaseConfig);

export default firebase.database();
