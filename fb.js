/**
 * Integração com o Firebase.com
 * By Edison
 * MIT License
 **/

// Configuração do Firebase para o site.
const firebaseConfig = {
    apiKey: "AIzaSyDmh0DNDJynNNIseATboLXvbA6temEmp-Y",
    authDomain: "frontend-edison.firebaseapp.com",
    projectId: "frontend-edison",
    storageBucket: "frontend-edison.appspot.com",
    messagingSenderId: "807425652691",
    appId: "1:807425652691:web:90cbbee0a6a56d8a006126"
};

// Incializa o Firebase
firebase.initializeApp(firebaseConfig);

// Incializa o Firebase Authentication
const auth = firebase.auth();

// Define o provedor de autenticação
var provider = new firebase.auth.GoogleAuthProvider();