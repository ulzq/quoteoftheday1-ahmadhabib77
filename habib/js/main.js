var quotes = [
"ahmad",
"habib",
"23,34,67",
"May the source be with you",
"DCI, everything is possible ;)",
"Whether you think you or you think you can’t, you’re right",
"Aim for failure and you always succeed"
]
var para = document.getElementById("quote")
function myFunction(){
para.innerHTML=quotes[Math.round(Math.random() * 3) ]
}