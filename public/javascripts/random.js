console.log(isloggedin)
loginbtn = document.getElementById("loginli");
regbtn = document.getElementById("regli");

if(isloggedin){
    loginbtn.style.display = "none";
    regbtn.style.display = "none";
}