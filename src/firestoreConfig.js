import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
require('firebase/firestore')

Vue.use(VueFirestore);

var firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDQriH4qZxfJYEnHzQ22MlcAFNv1pLSFek",
    authDomain: "vue-fs-dev-22060.firebaseapp.com",
    databaseURL: "https://vue-fs-dev-22060.firebaseio.com",
    projectId: "vue-fs-dev-22060",
    storageBucket: "vue-fs-dev-22060.appspot.com",
    messagingSenderId: "346248383289"
})

const firestore = firebaseApp.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export default firestore;