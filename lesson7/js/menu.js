


window.addEventListener('load',()=>{
  const hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('#navigation');

  hambutton.addEventListener('click',()=> {mainnav.classList.toggle('responsive')},false);
});

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
var day = n.getDay();
console.log(weekday[day])
document.getElementById("date").innerHTML = weekday[day] + ", "  + d + " "+ monthNames[m] +" " + y ;

function showhide(){
var n =  new Date();
var day = n.getDate();
console.log(day);


let pday = new Date();
let aside = document.querySelector('aside');

if (pday.getDay() === 5) {
  aside.style.display ="block";
}
else {
  aside.style.display = "none";
}
  
}
showhide();