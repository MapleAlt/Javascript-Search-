// Dont copy the comments
// Search up somthing random on google then activate the bookmarklet
// Bookmarklet
javascript: alert("If the pop up is blocked click on the blocked link!");
let Search = prompt("Please enter the URL of the website you want to go! If the pop up is blocked, click on the block link. If you want to add a space don't hit the spacebar hit the + key instead.");
if (Search != null) 
{  
    let newTab = window.open("/search?q=" + Search + "&safe=active&ssui=on");
    newTab.location.href = url;
}

