var roll = document.getElementById("roll"),
    clear = document.getElementById("clear"),
    RollResults = document.getElementById("roll-results"),
    display = document.getElementById("display-area"),
    TotalRolled = 0;

roll.addEventListener("click", function(){
    var currentRoll = getRandomNumber(1,6);
    TotalRolled += currentRoll;
    RollResults.innerHTML = "Total Rolled: " + TotalRolled;
   /* displayArea.innerHTML += '<img src="images/die' + currentRoll + '.jpg"><br>';*/
});

clear.addEventListener("click", function(){
    RollResults.innerHTML= "Total Rolled: 0";
    displayArea.innerHTML= " ";
    TotalRolled = 0;
});

var getRandomNumber = function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var randy = Math.random();

    console.log(min);
    console.log(max);
    console.log(randy);
    console.log(max - min);
    console.log(max - min + 1);
    console.log(randy * (max - min + 1));
    console.log(randy * (max - min + 1) + min);
    console.log(Math.floor(randy * (max - min + 1) + min));


    return Math.floor(randy * (max - min + 1) + min);
}



/*
rollButton.addEventListener("click", function(){
    var currentRoll = getRandomNumber(1,6); 
    totalRolled += currentRoll;
    displayArea.innerHTML += '<img src="images/die' + currentRoll + '.jpg"><br>';
    totalArea.innerHTML = "<h2>Total Rolled So Far: " + totalRolled + "</h2>";
});

startOverButton.addEventListener("click", function(){
    displayArea.innerHTML = "";
    totalArea.innerHTML = "<h2>Total Rolled So Far: 0</h2>";
    totalRolled = 0;
});

var getRandomNumber = function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var randy = Math.random();

    console.log(min);
    console.log(max);
    console.log(randy);
    console.log(max - min);
    console.log(max - min + 1);
    console.log(randy * (max - min + 1));
    console.log(randy * (max - min + 1) + min);
    console.log(Math.floor(randy * (max - min + 1) + min));


    return Math.floor(randy * (max - min + 1) + min);
}*/