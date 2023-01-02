var balls = document.getElementsByClassName('ball');
var bulb = document.getElementById('pic');
var text = document.getElementsByClassName('text');
var hidden = document.getElementsByClassName('hiddenText');


document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";

    // event.clientX => get the horiz coord of the onmouseover
    // window.innerWidth = get the width of the window

    for (var i=0; i<2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;

        balls[i].style.transform = "translate(-"+x+",-"+y+")";
        // od ovoga valjda bude realnije, ne nestaju sarenice u kutove ociju
    }
}


bulb.onclick = function(){
    document.body.classList.toggle("dark");
    balls[0].classList.toggle("visible");
    balls[1].classList.toggle("visible");
    hidden[0].classList.toggle("visible");
    text[0].classList.toggle("invisible");
  
}
