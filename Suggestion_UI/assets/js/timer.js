function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 15000);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
move();
var timer = 60;
var min = 0;
var sec = 0;

function startTimer() {
    if (sec <= 0 && min >= 0) {
        sec = 59;
        min = min - 1;
    } else if (sec > 0 && min >= 0) {
        sec = sec - 1;
    }

    document.getElementById("minutes").innerHTML = min.toString();
    document.getElementById("seconds").innerHTML = seconds.toString();

    setTimeout(function () {
        startTimer();
    }, 1000);
}

function change() {
    var num = 100;
    var elem = document.getElementById("Ketim");
    var id = setInterval(frame, 150000);

    function frame() {
        if (num <= 0) {
            document.getElementById('Ketim').src = "pics/" + num + "percent.png";
            clearInterval(id);
        } else {
            num = num - 10;
            document.getElementById('Ketim').src = "pics/" + num + "percent.png";
        }
    }
}
change();