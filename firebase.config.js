
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // onAuthStateChanged,
    signOut,
    updateProfile
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG4bjnPMO4NM-B5XFYeJDPMY2Bgp_Qg-U",
    authDomain: "authbills-ded0b.firebaseapp.com",
    databaseURL: "https://authbills-ded0b-default-rtdb.firebaseio.com",
    projectId: "authbills-ded0b",
    storageBucket: "authbills-ded0b.appspot.com",
    messagingSenderId: "1099081403421",
    appId: "1:1099081403421:web:715512f571963f21574af4",
    measurementId: "G-93EHEFQ3CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
let displayName = '';

const userEmail = document.querySelector('.up-email')
const userPassword = document.querySelector('.up-password')
const username = document.querySelector('#text')
const upForm = document.querySelector('.sign-up')
const name = document.querySelector('.up-text')?.addEventListener("change", (event) => {
    displayName = event.target.value;
    console.log(displayName)
})



const userSignUp = async () => {
    // console.log(displayName)
    try {
        const userObj = { name: "", email: "" };
        const signUpEmail = userEmail.value
        const signUpPassword = userPassword.value
        const response = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        await updateProfile(auth.currentUser, { displayName: displayName });
        console.log(response.user)
        console.log(response.user);
        userObj.name = response.user.displayName;
        userObj.email = response.user.email
        console.log(userObj)

        localStorage.setItem('eachUser', JSON.stringify(userObj));
        alert('user created successfuly')
        showLogin()
    } catch (error) {
        alert(error.message)
    }
    upForm.reset()
}





upForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    userSignUp();

});

function showLogin() {
    loginForm.classList.add('add_loginform')
    loginForm.style.display = 'block'
    signupForm.style.display = 'none'
    document.body.style.overflow = 'hidden'
    sidebar.classList.remove('show_sidebar')
}


const inForm = document.querySelector('.sign-in')
const inEmail = document.querySelector('.in-email')
const inPassword = document.querySelector('.in-password')
// console.log(inEmail , inPassword , inForm)

const userSignIn = async () => {
    // console.log(displayName)
    try {
        const signInEmail = inEmail.value
        const signInPassword = inPassword.value
        const response = await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        // console.log(response.user);
        alert('user logged in successfuly')
        window.location.replace('user/user.html')
        // const name = document.querySelector('.name').innerHTML = `${displayName}`
        console.log(response.user)


    } catch (error) {
        alert(error.message)
    }
    inForm.reset()
}



inForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    userSignIn();

});


// const checkAuthChange = async () => {
//     onAuthStateChanged(auth, user => {
//         if (user) {
//             console.log('true')
//             window.body.style.display = 'none';
//         } else {
//             console.log(user)
//         }
//     })
// }
// checkAuthChange()

const logOut = async () => {
    await signOut()
}
const logout = document.querySelector('.out')
// console.log(logout)
logout?.addEventListener('click', async function () {
    logOut()
    confirm('are you sure you want to log out')
    if(confirm) {
        await window.location.replace('/hero-section.html').then((_) => {
            alert('logged out succesfully')
        })
    }
})


