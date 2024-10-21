let menuItems= [ "home", "contact us", "comments", ];
let text= "<ul>";
debugger
for (let index = 0; index < menuItems.length; index++) {
    text+= "<li>" + menuItems[index] + "</li>";
}
text+="</ul>";
document.getElementById("demo").innerHTML=text;
