// Dont include comments when copy and pasting
// This engine was made by MapleVR

// Console command
alert("If the pop up is blocked click on the blocked link!");
let Search = prompt("Please enter the URL of the wbesite you want to go! If the pop up is blocked, click on the block link. If you want to add a space dont hit the space bar hit the + key instead.");
if (Search != null) 
{  
    let newTab = window.open("/search?q=" + Search + "&safe=active&ssui=on");
    newTab.location.href = url;
}

// Bookmarklet
javascript: alert("If the pop up is blocked click on the blocked link!");
let Search = prompt("Please enter the URL of the wbesite you want to go! If the pop up is blocked, click on the block link. If you want to add a space dont hit the space bar hit the + key instead.");
if (Search != null) 
{  
    let newTab = window.open("/search?q=" + Search + "&safe=active&ssui=on");
    newTab.location.href = url;
}
