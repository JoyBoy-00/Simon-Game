
$(document).keypress(function (e) {
    if ($("h1").text() == "Press any Key")
        options();
});


// For The sequence
var buttonColor = [];

function options() {
    var check = Math.floor(Math.random() * 4) + 1;
    switch (check) {
        case 1:
            op = "red";
            break;
        case 2:
            op = "yellow";
            break;
        case 3:
            op = "green";
            break;
        case 4:
            op = "blue";
            break;
    }
    buttonColor.push(op);
    $("h1").text("Level " + (buttonColor.length));
    setTimeout(function () {
        pressed(op);
    }, 300);
    selection = [];
}


function pressed(va) {
    var beats = new Audio("sounds/" + va + ".mp3");
    $("." + va).addClass("pressed");
    beats.play();
    setTimeout(function () {
        $("." + va).removeClass("pressed");
    }, 170);
}


// For the Selection of Buttons
var selection = [];

$("button").on("click", function () {
    if ($(this).hasClass("red"))
        color = "red";
    else if ($(this).hasClass("yellow"))
        color = "yellow";
    else if ($(this).hasClass("green"))
        color = "green";
    else
        color = "blue";
    selection.push(color);
    pressed(color);
    checkAnswer(selection.length - 1)
});


function checkAnswer(currentLevel) {
    if (selection[currentLevel] == buttonColor[currentLevel]) {
        if (buttonColor.length == (currentLevel + 1)) {
            setTimeout(function () {
                options();
            }, 1200)
        }
    }
    else {
        wrongAnswer();
    }

}


function wrongAnswer() {
    var beats = new Audio("sounds/wrong.mp3");
    beats.play();
    $("body").css("background-color", "red");
    $("#footer").css("background-color", "rgb(175,0,0)")
    $("h1").html("Game Over<br>Press any Key")
    setTimeout(function () {
        $("body").css("background-color", "rgb(7, 39, 84)");
        $("#footer").css("background-color", "rgb(6, 29, 61)")
    }, 200);
    $(document).keypress(function () {
        startOver();
    });
}


function startOver() {
    selection = [];
    buttonColor = [];
    options();
}

