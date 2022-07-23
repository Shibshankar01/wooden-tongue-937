let navbar = () =>{
 return `
 <div>
     <a href=""><img src="https://tmetric.com/images/tmetric_logo_with_text.svg" id="navLogo" alt=""></a>
     <button id="language">EN</button>
 </div>
 <div>
     <div class="nav_menu drop-down">Why TMetric <i class="fa fa-angle-down"></i></div>
     <div class="nav_menu drop-down">Apps & Integrations <i class="fa fa-angle-down"></i></div>
     <div class="nav_menu"><a href="pricing.html">Pricing</a></div>
     <div class="nav_menu"><a href="support.html">Support</a></div>
     <div class="nav_menu"><a href="blog.html">Blog</a></div>
 </div>
 <div>
     <a href="login.html" id="nav_login">Log In</a>
     <a href="signup.html" id="nav_signin">Sign Up</a>
 </div>`
}
export default navbar;