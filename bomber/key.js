var num = Math.floor(Math.random() * 99) + 1;
var count = 0;
var guessnum;
var max = 99;
var min = 1;

function setSmoke() {
    count++;
    switch (count) {
        case 1:
            document.img1.src = "img/smoke.png";
            break;
        case 2:
            document.img2.src = "img/smoke.png";
            break;
        case 3:
            document.img3.src = "img/smoke.png";
            break;
        case 4:
            document.img4.src = "img/smoke.png";
            break;
        case 5:
            document.img5.src = "img/smoke.png";
            break;
        case 6:
            document.img6.src = "img/smoke.png";
            break;
    }
}

function Guess() {
    guessnum = document.getElementById("number").value;
    if (guessnum == num) {
        alert('you get it , guess ' + count + ' times');
    } else if (count < 6) {
        setSmoke();
        if (guessnum > min && guessnum < num) {
            min = guessnum;
        } else if (guessnum < max && guessnum > num) {
            max = guessnum;
        }
        alert('wrong ,' + min + '~' + max);
    } else {
        alert('game over');
    }
}

function restart() {
    alert('restart');
    document.img1.src = "img/bomber.png";
    document.img2.src = "img/bomber.png";
    document.img3.src = "img/bomber.png";
    document.img4.src = "img/bomber.png";
    document.img5.src = "img/bomber.png";
    document.img6.src = "img/bomber.png";
    num = Math.floor(Math.random() * 99) + 1;
    max = 99;
    min = 1;
    count = 0;
}
