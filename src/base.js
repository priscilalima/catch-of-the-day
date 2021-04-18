import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firebase-auth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDxgh38bmUhjB-_CtgltccWrQPfWF11BIk',
  authDomain: 'catch-of-the-day-108ad.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-108ad-default-rtdb.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
