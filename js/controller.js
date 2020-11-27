const controller = {};

controller.register = (
    {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    }
) => {
    if(firstName === '') {
        view.setErrorMessage('firstNameErr', 'Enter your first name');
    } else {
        view.setErrorMessage('firstNameErr', '');
    }
    if(lastName === '') {
        view.setErrorMessage('lastNameErr', 'Enter your last name');
    } else {
        view.setErrorMessage('lastNameErr', '');
    }
    if(email === '') {
        view.setErrorMessage('emailErr', 'Enter your email');
    } else {
        view.setErrorMessage('emailErr', '');
    }
    if(password === '') {
        view.setErrorMessage('passwordErr', 'Enter your password');
    } else {
        view.setErrorMessage('passwordErr', '');
    }
    if(confirmPassword === '') {
        view.setErrorMessage('confirmPasswordErr', 'Enter your confirm password');
    } else {
        if(confirmPassword !== password) {
            view.setErrorMessage('confirmPasswordErr', 'Password don\'t match')
        } else {
            view.setErrorMessage('confirmPasswordErr', '');
        }
    }
    if(firstName !== '' && lastName !=='' && email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword) {
        const dataRegister = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        model.register(dataRegister);
    }
}

controller.login = ({email, password}) => {
    if(email === '') {
        view.setErrorMessage('emailErr', 'Enter your email');
    } else {
        view.setErrorMessage('emailErr', '');
    } 
    if(password === '') {
        view.setErrorMessage('passwordErr', 'Enter your password');
    } else {
        view.setErrorMessage('passwordErr', '');
    }
    if(email !== '' && password !== '') {
        const dataLogin = {
            email: email,
            password: password
        }
        model.login(dataLogin);
    }
}

controller.quickAddTask = ({creator, content, dueDate, priority, state, subTasks}) => {
    if(content === '') {
        view.setErrorMessage('quickTaskHelp', 'Enter task content');
    } else {
        view.setErrorMessage('quickTaskHelp', '');
        const taskData = {
            creator: creator,
            content: content,
            dueDate: dueDate,
            priority: priority,
            state: state,
            subTasks: subTasks
        }
        model.quickAddTask(taskData);
    }
}

controller.updateTask = ({updater, content, dueDate, priority, state, subTasks}) => {
    if(content === '') {
        view.setErrorMessage('updateTaskHelp', 'Enter task content');
    } else {
        view.setErrorMessage('updateTaskHelp', '');
        const taskData = {
            updater: updater,
            content: content,
            dueDate: dueDate,
            priority: priority,
            state: state,
            subTasks: subTasks
        }
        model.updateTask(taskData);
    }
}