const model = {};

model.currentUser = {};

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
            console.log('Verified');
            view.setActiveScreen('homePage');
        }
    } catch(err) {
        console.log(err);
        alert(err.message);
    }
}

model.quickAddTask = ({creator, content, dueDate, priority, state, subTasks}) => {
    const dataToAdd = {
        creator: creator,
        content: content,
        dueDate: dueDate,
        priority: priority,
        state: state,
        subTasks: subTasks
    }
    firebase.firestore().collection('tasks').add(dataToAdd).catch(function(error) {
        console.error("Error adding document: ", error);
    });
}