const components = {};

components.welcomePage = `

    <div class="welcome-container">       
        <nav class="navbar navbar-expand-lg px-5 shadow-sm" style="font-size: 1.1rem;">
            <a class="navbar-brand" href="#">iDo-App</a>
            <button class="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active mr-4 btn-hover border-transparent">
                        <a class="nav-link text-secondary" href="#">About us <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item btn-hover border-transparent" id="login">
                        <a class="nav-link text-secondary" href="#">Sign in</a>
                    </li>
                    <li class="nav-item btn-hover border-transparent" id="register">
                        <a class="nav-link text-secondary" href="#">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="showcase">
            <div class="container">
                <div class="row justify-content-between py-5">
                    <div class="col-12 col-lg-6 slogan">
                        <h1>
                            Stay Organized<br>Stay Creative
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam iste, quas earum, id in quis libero fugit et beatae magnam vero quae ut tempore. Minima, eum! Quam harum repellat voluptatibus.
                        </p>
                        <button class="btn btn-primary py-2 mb-2" id="get-started">
                            Get Started - It's Free
                        </button>
                    </div>
                    <img src="./imgs/welcome-bg.png" class="col-12 col-lg-6">
                </div>
            </div>
        </div>
    </div>              
`

components.loginPage = `
    <div class="login-container">
        <form action="" id="login-form">
            <div class="form-group">
                <h1 class="text-center pb-3">Login</h1>
                <label for="email">Email address</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailErr">
                <small id="emailErr" class="error-message form-text"></small>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" id="password" aria-describedby="passwordErr">
                <small id="passwordErr" class="error-message form-text"></small>
            </div>
            <div class="row justify-content-between px-4 align-items-center">
                <div class="font-weight-bold reg-btn">
                    CREATE ACCOUNT
                </div>
                <button type="submit" id="login-btn">
                    SIGN IN
                </button>
            </div>
    </div>
`

components.registerPage = `
<div class="register-container">
    <form action="" id="register-form">
        <div class="form-group">
            <h1 class="text-center pb-3">Sign Up</h1>
            <div class="row">
                <div class="col">
                <input type="text" class="form-control" name="firstName" placeholder="First name" aria-describedby="firstNameErr">
                <small id="firstNameErr" class="error-message form-text"></small>
                </div>
                <div class="col">
                <input type="text" class="form-control" name="lastName" placeholder="Last name" aria-describedby="lastNameErr">
                <small id="lastNameErr" class="error-message form-text"></small>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailErr">
            <small id="emailErr" class="error-message form-text"></small>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password" aria-describedby="passwordErr">
            <small id="passwordErr" class="error-message form-text"></small>
        </div>
        <div class="form-group">
            <label for="confirmPassword">Confirm password</label>
            <input type="password" class="form-control" name="confirmPassword" id="confirmPassword" aria-describedby="confirmPasswordErr">
            <small id="confirmPasswordErr" class="error-message form-text"></small>
        </div>
        <div class="row justify-content-between px-4 align-items-center">
            <div class="font-weight-bold log-btn">
                HAVE AN ACCOUNT?
            </div>
            <button type="submit" id="register-btn">
                CREATE
            </button>
        </div>
</div> 
`

components.homePage = `
    <h1>Signed</h1>
`