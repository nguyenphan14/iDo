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

    }
}

view.setErrorMessage = (id, message) => {
    document.getElementById(id).innerText = message;
}