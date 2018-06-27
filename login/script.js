alert('5666');
var database = [
    {
        name: "John",
        password: "wkie"
    },

    {
        name: "David",
        password: "123"
    },

    {
        name: "Amy",
        password: "456"
    }
];

var newsFeed = [
    {
        name: "John",
        timeline: "Just Monika!"
    },

    {
        name: "David",
        timeline: "Just Sayori!"
    },

    {
        name: "Amy",
        timeline: "Just Natsuki!"
    }

];

function uservalue(name, password) {
    for (var i = 0; i < database.length; i++) {
        if (name == database[i].name && password == database[i].password) {
            return true;
        }
    }
    return false;
};

function signin(name, password) {
    if (uservalue(name, password) == true) {
        console.log(newsFeed);
    } else {
        alert("Sorry you are not dokidoki!");
    }
};

var user = {

};

var nameprompt = prompt("what is your name ?");
var passwordprompt = prompt("what is your password?");
signin(nameprompt, passwordprompt);
