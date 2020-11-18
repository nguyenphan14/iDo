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
    <div class="container-fluid">
        <nav class="navbar bg-light row justify-content-between navbar-expand-lg" style="background-color: #41aea9 !important">
            <div class="row">
                <button class="btn ml-5">
                    <i class="fas fa-bars icon"></i>
                </button>
                <button class="btn">
                    <i class="fas fa-home icon"></i>
                </button>
                <form class="form-inline">
                    <input class="form-control form-control-sm mr-sm-2 nav-input" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn  btn-sm my-2 my-sm-0" type="submit">
                        <i class="fas fa-search icon"></i>
                    </button>
                </form>
            </div>
            <div class="row">
                <button class="btn" id="add-task" type="button" data-toggle="modal" data-target="#addTaskForm">
                    <i class="fas fa-plus icon"></i>
                </button>
                <div class="modal fade " id="addTaskForm" tabindex="-1" aria-labelledby="quickAddTask" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="quickAddTask">Quick add task</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form id="quickAddTaskForm">
                                    <div class="form-group">
                                        <label for="quick-task-content" class="col-form-label">Task:</label>
                                        <textarea class="form-control" id="quick-task-content" name="quickTaskContent" rows="3" aria-describedby="quickTaskHelp"></textarea>
                                        <small id="quickTaskHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="row">
                                        <div class="form-group row col-8">
                                            <label for="task-due-date" class="col-2 col-form-label">Date:</label>
                                            <div class="col-10">
                                                <input class="form-control" type="date" value="2020-12-09" id="task-due-date" name="taskDueDate">
                                            </div>
                                        </div>
                                        <div class="col-4" style="padding: 0">
                                            <div class="form-group row">
                                                <label for="task-priority" class="col-4 text-center mt-2">Priority: </label>
                                                <div class="col-8">
                                                    <select class="form-control" id="task-priority" name="taskPriority">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                      </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="task-state" class="col-1 mr-2 mt-2">State: </label>
                                        <div class="col-8">
                                            <select class="form-control" id="task-state" name="taskState">
                                                <option>To do</option>
                                                <option>Doing</option>
                                                <option>Done</option>
                                              </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                              <button type="submit" class="btn btn-add" form="quickAddTaskForm">Add task</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn">
                    <i class="fas fa-tasks icon"></i>
                </button>
                <div class="dropdown mr-5 ">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <a>
                            <i class="fas fa-cog icon"></i>
                        </a>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right mt-3" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Settings</a>
                    <a class="dropdown-item" href="#">About us</a>
                    <a class="dropdown-item" href="#">Log out</a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="row">
            <div class="left-side col-3">
                <div class="list-holder">
                    <div class="filter-main mt-3">
                        <ul class="list-filter">
                            <li><i class="fas fa-layer-group p-2" style="color: #246fe0;"></i>Inbox</li>
                            <li><i class="fas fa-calendar-day p-2" style="color: #058527;"></i>Today</li>
                            <li><i class="far fa-calendar-alt p-2" style="color: #692fc2;"></i>Upcoming</li>
                        </ul>
                    </div>
                    <div class="filter-expand">
                        <ul class="list-filter-expansion">
                            <li>
                                <i class="fas fa-chevron-right p-2"></i>Labels
                            </li>
                            <li>
                                <i class="fas fa-chevron-right p-2"></i>Filters
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="task-list col-9">
                <div class="container mt-5 px-5">
                    <div class="filter">
                        <h3>Inbox</h3>
                    </div>
                    <ul>
                        <li class="row task-item mt-2">
                            <div class="mt-1">
                                <button class="task-check-box task-priority-1"></button>
                            </div>
                            <div class="task-content pl-2 col">
                                <div class="task-content-text">
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                </div>
                                <span class="task-flag task-flag-1">
                                    <i class="far fa-flag"></i>
                                </span>
                                <span class="task-content-schedule text-muted">
                                    Nov 18 2020
                                </span>
                            </div>
                            <div class="float-right task-edit mt-1">
                                <i class="far fa-edit"></i>
                            </div>
                        </li>
                        <li class="row task-item mt-2">
                            <div class="mt-1">
                                <button class="task-check-box task-priority-2"></button>
                            </div>
                            <div class="task-content pl-2 col">
                                <div class="task-content-text">
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                </div>
                                <span class="task-flag task-flag-2">
                                    <i class="far fa-flag"></i>
                                </span>
                                <span class="task-content-schedule text-muted">
                                    Nov 18 2020
                                </span>
                            </div>
                            <div class="float-right task-edit mt-1">
                                <i class="far fa-edit"></i>
                            </div>
                        </li>
                        <li class="row task-item mt-2">
                            <div class="mt-1">
                                <button class="task-check-box task-priority-3"></button>
                            </div>
                            <div class="task-content pl-2 col">
                                <div class="task-content-text">
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                    Learning English Learning English Learning English Learning English Learning English Learning English
                                </div>
                                <span class="task-flag task-flag-3">
                                    <i class="far fa-flag"></i>
                                </span>
                                <span class="task-content-schedule text-muted">
                                    Nov 18 2020
                                </span>
                            </div>
                            <div class="float-right task-edit mt-1">
                                <i class="far fa-edit"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`