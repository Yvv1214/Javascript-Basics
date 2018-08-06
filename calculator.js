
var check = document.getElementById("check"),
    tip = document.getElementById("tip"),
    button = document.getElementById("calculate"),
    results = document.getElementById("results");

    button.addEventListener("click", function(){

        var checkAmount = parseFloat(check.value),
            tipPercent = parseFloat(tip.value)/100,
            tipAmount = checkAmount * tipPercent,
            totalAmount = checkAmount + tipAmount;

        if (isNaN(checkAmount) || isNaN(tipAmount)){
            alert("Please insert a number");
            return;
        }


            results.innerHTML = "<strong> Check Amount: </strong> $" + checkAmount + "<br>" 
            + "<strong> Tip Amount: </strong> $" + tipAmount + "<br>" 
            + "<strong> Total Amount: </strong> $" + totalAmount;
    })