// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();  

// Last time web page updated

var x = new Date(document.lastModified);

document.getElementById("update").innerHTML = x;                    