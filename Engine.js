// Do not copy comments
// Regular Code
let Search = prompt("Hello, and thanks for using Javascript Search. Please enter what you want to search below. If the pop up is blocked just click on the blocked link! Made by Maple and Maskedwrrg on Github!");
if (Search != null)
{
    query = Search;
    url ='http://www.google.com/search?q=' + query;
    window.open(url,'_blank');
    alert("Search has been completed! Made by Maple and Maskedwrrg on Github!");
}
// Bookmarklet
javascript: let Search = prompt("Hello, and thanks for using Javascript Search. Please enter what you want to search below. If the pop up is blocked just click on the blocked link! Made by Maple and Maskedwrrg on Github!");if (Search != null){    query = Search;    url ='http://www.google.com/search?q=%27 + query;    window.open(url,%27_blank%27);    alert("Search has been completed! Made by Maple and Maskedwrrg on Github!");}
