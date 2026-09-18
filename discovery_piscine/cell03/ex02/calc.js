var button = document.getElementById("calculate");

button.addEventListener("click", function () {
    var left = document.getElementById("left").value;
    var operator = document.getElementById("operator").value;
    var right = document.getElementById("right").value;

    if (!/^\d+$/.test(left) || !/^\d+$/.test(right)) {
        alert("Error :(");
        return;
    }

    var numLeft = parseInt(left, 10);
    var numRight = parseInt(right, 10);
    var result;

    if ((operator === "/" || operator === "%") && numRight === 0) {
        alert("It's over 9000!");
        return;
    }

    switch (operator) {
        case "+":
            result = numLeft + numRight;
            break;

        case "-":
            result = numLeft - numRight;
            break;

        case "*":
            result = numLeft * numRight;
            break;

        case "/":
            result = numLeft / numRight;
            break;

        case "%":
            result = numLeft % numRight;
            break;
    }

    console.log(result);
    alert(result);
});

setInterval(function () {
    alert("Please, use me..");
}, 30000);
