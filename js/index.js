window.onload = () => {
    console.log('Window loaded');
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyARt5k7oXXEO3iQyCtgkkhdlO86RGv3N40",
        authDomain: "ido-app-6c4cb.firebaseapp.com",
        databaseURL: "https://ido-app-6c4cb.firebaseio.com",
        projectId: "ido-app-6c4cb",
        storageBucket: "ido-app-6c4cb.appspot.com",
        messagingSenderId: "392714500992",
        appId: "1:392714500992:web:0b21accae691ef53e09f65"
    }
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
            if(user.emailVerified) {
                model.currentUser = {
                    displayName: user.displayName,
                    email: user.email
                }
                view.setActiveScreen('homePage');
                document.getElementById('logOut').addEventListener('click', () => {
                    firebase.auth().signOut();
                })
            } else {
                alert('Please verify your email');
                view.setActiveScreen('loginPage');
            }
        } else {
        // No user is signed in.
            view.setActiveScreen('registerPage');
        }
    });
}



const getDataFormDoc = (respone) => {
    const data = respone.data();
    data.id = respone.id;
    return data;
}

const getDataFormDocs = (respone) => {
    return respone.docs.map((doc) => getDataFormDoc(doc));
}