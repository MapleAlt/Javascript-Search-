// Dont copy the comments
// Search up somthing random on google then activate the bookmarklet
// Bookmarklet
javascript: alert("If the site gets pop up blocked click the blocked link and it will take you to the site");
let Search = prompt("Welcome to Javascript Search. Please enter a URL to search down below then click ok. If you want to add a space use the + key instead of the space bar! Press cancel to stop!");
if (Search != null) 
{  
    let newTab = window.open("https://google.com");("/search?q=" + Search + "&safe=active&ssui=on");
    newTab.location.href = url;
}
