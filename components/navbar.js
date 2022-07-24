let navbar = () =>{
 return `
 <div class="wrapper">
                <div class="logo">
                    <a href="index.html"><img src="https://tmetric.com/images/tmetric_logo_with_text.svg" id="navLogo" alt=""></a>
                    <button id="language">EN</button>
                </div>

                <ul class="nav-links">
                    <li>
                        <a href="">Why TMetric <i class="fa fa-angle-down"></i></a>
                        <div class="menu">
                            <div class="content">
                                <div class="row">
                                    <header>Overview</header>
                                    <ul class="menu-links">
                                        <li><a href="solutions.html">Industry<br><br>
                                            Made for all industries. Check benefits of usage</a>
                                        </li>
                                        <li><a href="">Customers<br><br>
                                            See why business use TMetric for time tracking and workflow management</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header>Features</header>
                                    <ul class="menu-links">
                                        <li><a href="">Time Tracking <br><br>
                                            Capture and control every task you work on</a>
                                        </li>
                                        <li><a href="">Billing & Invoicing<br><br>
                                            Set billable rates and easily create invoices</a>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div class="row">
                                    <header> </header>
                                    <ul class="menu-links">
                                        <li><a href="">Project Management <br><br>
                                            Create projects, set rates and budgets</a> 
                                        </li>
                                        <li><a href="">Team Management <br><br>
                                            Monitor productivity and activity level of your team</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header> </header>
                                    <ul class="menu-links">
                                        <li><a href="">Task Management <br><br>
                                            Manage tasks and set up an effective workflow</a>
                                        </li>
                                        <li><a href="">Time Off <br><br>
                                            Simply ask for days off and control teams attendance</a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            <p><a href="features.html">View All Features</a> </p> 
                        </div>
                    
                    </li>
                    <li><a href="">Apps & Integrations <i class="fa fa-angle-down"></i></a>
                        <div class="menu">
                            <div class="content">
                                <div class="row">
                                    <header>Apps</header>
                                    <ul class="menu-links">
                                        <li><a href="">Browser Extensions<br><br>
                                            Simple time tracking extension which helps you be more productive</a>
                                        </li>
                                        <li><a href="">Mobile apps<br><br>
                                            Install TMetric app to your phone or a tablet device. Android and iOS platforms are supported.</a>
                                        </li>
                                        <li><a href="">Desktop apps <br><br>
                                            Download TMetric app for your desktop computer or a laptop</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header>Integrations</header>
                                    <ul class="menu-links">
                                        <li><a href="">
                                            Jira <br><br>
                                            Time tracking on every task in one click</a>
                                        </li>
                                        <li><a href="">
                                            MS Office <br><br>
                                            Get plugin for tracking time in MS Office Online</a>
                                        </li>
                                        
                                    </ul>
                                    
                                </div>
                                <div class="row">
                                    <header> </header>
                                    <ul class="menu-links">
                                        <li><a href="">Asana <br><br>
                                            Start to accurately track time of tasks</a> 
                                        </li>
                                        <li><a href="">GitHub <br><br>
                                            Track time spent working on an issue with one mouse click</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header> </header>
                                    <ul class="menu-links">
                                        <li><a href="">Todoist <br><br>
                                            Track time of your lists and tasks</a>
                                        </li>
                                        <li><a href="">Freshdesk <br><br>
                                            Track time spent on every support ticket</a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            <p><a href="integrations.html">View All Integrations </a> </p> 
                        </div>
                    </li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="support.html">Support</a></li>
                    <li><a href="blog.html">Blog</a></li>
                </ul>

                <div id="nav_log-sign">
                    <a href="login.html" id="nav_login">Log In</a>
                    <a href="signup.html" id="nav_signin">Sign Up</a>
                </div>
            </div>`
}
export default navbar;