const view = {};

view.setActiveScreen = (screen) => {
    switch(screen) {
        case 'welcomePage': 
            document.getElementById('iDo-app').innerHTML = components.welcomePage;
            document.getElementById('login').addEventListener('click', () => {
                view.setActiveScreen('loginPage');
            });
            document.getElementById('register').addEventListener('click', () => {
                view.setActiveScreen('registerPage');
            })
            document.getElementById('get-started').addEventListener('click', () => {
                view.setActiveScreen('loginPage');
            })
            break;
        case 'loginPage':
            document.getElementById('iDo-app').innerHTML = components.loginPage;
            document.querySelector('.reg-btn').addEventListener('click', () => {
                view.setActiveScreen('registerPage');
            });

            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const dataLogin = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(dataLogin);
            })

            break;
        case 'registerPage':
            document.getElementById('iDo-app').innerHTML = components.registerPage;
            document.querySelector('.log-btn').addEventListener('click', () => {
                view.setActiveScreen('loginPage');
            });

            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const dataRegister = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                controller.register(dataRegister);
            })
            break;
        case 'homePage':
            document.getElementById('iDo-app').innerHTML = components.homePage;
            const quickAddTaskForm = document.getElementById('quickAddTaskForm');
            quickAddTaskForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const taskData = {
                    creator: model.currentUser.email,
                    content: quickAddTaskForm.quickTaskContent.value,
                    dueDate: new Date(quickAddTaskForm.taskDueDate.value).toDateString(),
                    priority: quickAddTaskForm.taskPriority.value,
                    state: quickAddTaskForm.taskState.value,
                    subTasks: []
                }
                controller.quickAddTask(taskData);
            });
            model.getAllTasks();
            model.listenTaskChange();
            const updateTaskForm = document.getElementById('updateTaskForm');
            updateTaskForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const taskData = {
                    updater: model.currentUser.email,
                    content: updateTaskForm.quickTaskContent.value,
                    dueDate: new Date(quickAddTaskForm.taskDueDate.value).toDateString(),
                    priority: updateTaskForm.taskPriority.value,
                    state: updateTaskForm.taskState.value,
                    subTasks: []
                }
                controller.updateTask(taskData);
                $('#updateTaskModal').modal('hide');
            });
            document.getElementById('filter-today').addEventListener('click', () => {
                view.setActiveScreen('todayFilter');
            })
            document.getElementById('filter-upcoming').addEventListener('click', () => {
                view.setActiveScreen('upcomingFilter');
            })

            break;
        case 'todayFilter':
            document.getElementById('filter-section').innerHTML = `
                    <div class="filter-name">
                        <h3>Today</h3>
                    </div>
                    <ul id="task-list"></ul>
            `
            document.getElementById('filter-upcoming').addEventListener('click', () => {
                view.setActiveScreen('upcomingFilter');
            })
            document.getElementById('filter-inbox').addEventListener('click', () => {
                view.setActiveScreen('homePage');
            });
            const todayTasks = model.tasks.filter((task) => task.dueDate === new Date().toDateString());
            document.getElementById('task-list').innerHTML = "";
            todayTasks.forEach((task) => view.addTask(task))
            break;
        case 'upcomingFilter':
            document.getElementById('filter-section').innerHTML = `
                    <div class="filter-name">
                        <h3>Upcoming</h3>
                    </div>
                    <ul id="task-list"></ul>
            `
            document.getElementById('filter-today').addEventListener('click', () => {
                view.setActiveScreen('todayFilter');
            })
            document.getElementById('filter-inbox').addEventListener('click', () => {
                view.setActiveScreen('homePage');
            })
            break;

    }
}

view.setErrorMessage = (id, message) => {
    document.getElementById(id).innerText = message;
}

view.addTask = (task) => {
    let li = document.createElement('li');
    li.id = task.id;
    li.className = 'row task-item mt-2';
    li.innerHTML = `
    <div class="mt-1">
        <button type="button" class="task-check-box task-priority-${task.priority}" data-toggle="tooltip" data-placement="bottom" title="Done!"></button>
    </div>
    <div class="task-content pl-2 col">
        <div class="task-content-text">
            ${task.content}
        </div>
        <span class="task-flag task-flag-${task.priority}">
            <i class="far fa-flag" aria-hidden="true"></i>
        </span>
        <span class="task-content-schedule text-muted">
            ${new Date(task.dueDate).toDateString()}
        </span>
    </div>
    <div class="float-right task-edit mt-1">
        <i class="far fa-edit" aria-hidden="true"></i>
    </div>
    `
    document.getElementById('task-list').appendChild(li);
    document.querySelector(`#${task.id} .task-edit`).addEventListener('click', (event) => {
        $('#updateTaskModal').modal('show');
        model.updateTaskId.push(task.id);
    });
    document.querySelector(`#${task.id} .task-check-box`).addEventListener('click', (event) => {
        document.getElementById('taskCompleter').innerHTML = model.currentUser.displayName;
        $('.toast').toast('show');
        document.getElementById(task.id).style.display = 'none';
        model.completeTask(task.id);    
    })
}

view.showAllTasks = () => {
    document.getElementById('task-list').innerHTML = "";
    model.tasks.forEach((task) => view.addTask(task));
}
