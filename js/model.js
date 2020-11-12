const model = {};

model.register = async ({firstName, lastName, email, password, confirmPassword}) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        //Update current user's display name
        firebase.auth().currentUser.updateProfile(
            {
                displayName: firstName + ' ' + lastName
            }
        );
        
        //Send verify email
        firebase.auth().currentUser.sendEmailVerification();
        alert('Register successfully, please verify your email');
        view.setActiveScreen('loginPage');
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

model.login = async ({email, password}) => {
    try {
        let respone = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(respone)

        const user = respone.user;
        if(!user.emailVerified) {
            alert('Verify your email');
            user.sendEmailVerification();
        } else {
            view.setActiveScreen('homePage');
        }
    } catch(err) {
        console.log(err);
        alert(err.message);
    }
}