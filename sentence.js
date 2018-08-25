
    var textBox = document.getElementById("textbox"),
    button = document.getElementById("button"),
    clear = document.getElementById("clear"),
    output = document.getElementById("output"),
    phrases1 = ["Once upon a time",
        "In a small village by the sea",
        "Long ago and far away",
        "In a world",
        "A long time ago, in a galaxy far, far away"],
    phrases2 = ["lived someone named",
        "there lived a person called",
        "a mad scientist created a hideous monster called",
        "lived a beautiful elf named",
        "existed an ancient alien who went by the odd name of"],
    phrases3 = [
        "who ate",
        "who was eaten by",
        "who fell in love with",
        "who was betrayed by",
        "who loved to play quietly with",
        "who slayed"
    ],
    phrases4 = [
        "an apple",
        "a fiersome dragon",
        "a scary ghost",
        "a beautiful young woman",
        "a handsome young man",
        "Spiderman",
        "a fiery horse named Sparkles",
        "a puzzle with a picture of a lovely meadow",
        "a horrifying gorgon"
    ];

var getPhrase = function getPhrase(wordList){
    var randy = getRandomNumber(0, wordList.length - 1);
    return wordList[randy];
}

button.addEventListener("click", function(){

    var results = getPhrase(phrases1);
    results += " " + getPhrase(phrases2); 
    results += " " + textBox.value;
    results += " " + getPhrase(phrases3);
    results += " " + getPhrase(phrases4);
    results += ".";

    output.innerHTML += '<p class="random-sentence">' + results + "</p>"; 
});

textbox.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        button.click();
    }
})

clear.addEventListener("click", function(){
    output.innerHTML = "";
    textBox.value = "";
});

var getRandomNumber = function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var randy = Math.random();

    return Math.floor(randy * (max - min + 1) + min);
}
