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

// Importa o "core" do Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

// Importa o Authentication do Firebase.
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Initializa o Firebase.
const fbapp = initializeApp(firebaseConfig);

// Especifica o provedor de autenticação.
const provider = new GoogleAuthProvider();

// Inicializa o mecanismo de autenticação.
const auth = getAuth();

//signInWithPopup(auth, provider)


onAuthStateChanged(auth, (user) => {
    if (user) {
        sessionStorage.userData = JSON.stringify({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid
        })
    } else {
        delete sessionStorage.userData
    }
});

$(document).ready(myFirebase)


function myFirebase() {

    // Detecta cliques no botão de login.
    $('#navUser').click(login)
}
// Função que processa cliques no botão login/profile.

function login() {

        // Se não está logado...
    if (!sessionStorage.userData) {

        // Faz login usando popup.
        signInWithPopup(auth, provider)
            .then(() => {

                // Redireciona para a 'home'.
                location.href = '/home'
            })
    } else

        // Redireciona para 'profile'.

        location.href = '/profile'

        return false
}