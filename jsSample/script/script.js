
function login() {
    let username = document.getElementById("uname");
    let password = document.getElementById("psw");
    let unameValue;
    let captcha=document.getElementById("captcha");
    let pswValue;
    debugger
    unameValue = username.value.toLowerCase();
    pswValue = password.value;
    captValue=captcha.value;
    if (unameValue === "admin" && pswValue === "123" && captValue==="123Q123") {
        alert('welcome!');
    } else {
        alert('wrong username or password!');
    }

}