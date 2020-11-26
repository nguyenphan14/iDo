const model = {};

model.tasks = [];
model.currentUser = {};
model.updateTaskId = [];

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

model.quickAddTask = async ({creator, content, dueDate, priority, state, subTasks}) => {
    const dataToAdd = {
        creator: creator,
        content: content,
        dueDate: dueDate,
        priority: priority,
        state: state,
        subTasks: subTasks
    }
    const respone = await firebase.firestore().collection('tasks').add(dataToAdd)
    .then((res) => {
        //Hide quick add task form
        $('#addTaskForm').modal('hide');
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

model.getAllTasks = async () => {
    const respone = await firebase.firestore().collection('tasks').get();
    model.tasks = getDataFormDocs(respone);
    if(model.tasks.length > 0) {
        view.showAllTasks();
    }
}

model.listenTaskChange = () => {
    let isFirst = true;
    firebase.firestore().collection('tasks').onSnapshot((snapshot) => {
        if(isFirst) {
            isFirst = false;
            return;
        }
        snapshot.docChanges().forEach((change) => {
            console.log(change)
            if(change.type === "added") {
                model.tasks.push(change.doc.data());
                view.addTask(change.doc.data());
            } else if(change.type === "modified") {
                
            }
        })
    })
}

model.updateTask = ({updater, content, dueDate, priority, state, subTasks}) => {
    const docId = model.updateTaskId[model.updateTaskId.length-1];
    const dataUpdate = {
        updater: updater,
        content: content,
        dueDate: dueDate,
        priority: priority,
        state: state,
        subTasks: firebase.firestore.FieldValue.arrayUnion(...subTasks)
    }
    firebase.firestore().collection('tasks').doc(docId).update(dataUpdate)
    .catch((err) => console.log(err));

}