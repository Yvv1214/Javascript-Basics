var greetings = document.getElementById("greetings-button"),
    hello = document.getElementById("hello-button"),
    howdy = document.getElementById("howdy-button"),
    hey = document.getElementById("hey-button"),
    backatya = document.getElementById("back-at-ya"),
    clear = document.getElementById("clear-button"),
    print = document.getElementById("print-button"),
    textbox = document.getElementById("greetings-input"),
    output = document.getElementById("print-area");

var greet = function greet(button){
    var text = textbox.value;

    output.innerHTML = button.value + " " + text;
};


greetings.addEventListener("click", function(){
    greet(greetings);
});

hello.addEventListener("click", function(){
    greet(hello);
});

howdy.addEventListener("click", function(){
    greet(howdy);
})

hey.addEventListener("click", function(){
    greet(hey);
});

backatya.addEventListener("click", function(){
    greet(backatya);
});

clear.addEventListener("click", function(){
    output.innerHTML = " ";
    textbox.value = " ";
});

print.addEventListener("click", function(){
    output.innerHTML = textbox.value
});

textbox.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13) {
        print.click();
    }
});