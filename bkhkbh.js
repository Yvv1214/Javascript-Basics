var name = document.getElementById("name"),
    button = document.getElementById("button"),
    clear = document.getElementById("clear"),
    output = document.getElementById("output"),
    phrases1 = ["Once upon a time,",
                "Long ago and far far away,",
                "In a small village by the sea,",
                "In a world,",
                "A long time ago, in a galaxy far far away,"],
    phrases2  = ["there lived someone named",
                 "there lived a person called",
                 "a mad scientist created a hideous monster",
                 "lived a beautiful elf named",
                 "existed an ancient alien who went by the name of"],
    phrases3 = ["who ate",
                "who was eaten by",
                "who was betrayed by",
                "who loved to play quietly with",
                "who slayed"],
    phrases4 = ["an apple.",
                "a firesome dragon.",
                "a scary ghost.",
                "a beautiful young woman.",
                "a handsome young man.",
                "Spiderman.",
                "a fiery horse named Sparkles.",
                "a puzzle with a picture of a lovely meadow.",
                "a horrifying gorgon."];


/*random is functioned to select an array starting from zero from a phrase*/
/*results is from one of the phrases and the random function*/

    var getphrase = function getphrase(wordlist){
        var randy = getRandomNumber(0, wordlist.lenght - 1);
        return wordlist[randy]; 
    }

    button.addEventListener("click", function(){
        var results = getphrase(phrases1);
        results+= " " + getphrase(phrases2);
        results+= " " + name.value;
        results+= " " + getphrase(phrases3);
        results+= " " + getphrase(phrases4);

        output.innerHTML += '<p>' + results + "</p>";
    });

    clear.addEventListener("click", function(){
        output.innerHTML =" ";
        name.value =" ";
    });

    var getRandomNumber = function getRandomNumber(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        var randy = Math.random();
    
        return Math.floor(randy * (max - min + 1) + min);
    }