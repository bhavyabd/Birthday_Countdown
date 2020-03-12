function calculate(){

//get today's date
var today = new Date();
var dd = today.getDate();
var mo = today.getMonth()+1;
var yy = today.getFullYear();
var hh = today.getHours();
var mm = today.getMinutes();
var ss = today.getSeconds();

var day = document.getElementById("Day").value;
var month = document.getElementById("Month").value;
console.log(dd);
console.log(mo);
var countdownDate;
if(month > mo){
    countdownDate = new Date(""+month+" "+day+" , 2020 00:00:00").getTime(); 
}
else if(month < mo ){
    countdownDate = new Date(""+month+" "+day+" , 2021 00:00:00").getTime(); 
}
else if( day > dd){
    countdownDate = new Date(""+month+" "+day+" , 2020 00:00:00").getTime(); 
}
else if(day <= dd){
    countdownDate = new Date(""+month+" "+day+" , 2021 00:00:00").getTime();
}
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countdownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000); 

    }
