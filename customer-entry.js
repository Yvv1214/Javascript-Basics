var salutation = document.getElementById("salutation"),
    FirstName = document.getElementById("first-name"),
    LastName = document.getElementById("last-name"),
    enter = document.getElementById("enter"),
    clear = document.getElementById("clear"),
    output = document.getElementById("customer-list"),
    nextid = 0,
    customerList = [];



var Customer = function Customer(salutation, FirstName, LastName){
    this.salutation = salutation;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.id = nextid++;

    this.greetformally = function greetformally(){
        var greetString = "Greetings ";

        if(this.salutation == ""){
            greetString += this.FirstName + " " + this.LastName
        } else {
            greetString += this.salutation + " " + this.LastName;
        }

        return greetString;
    }
}

var renderCustomer = function renderCustomer (){
    output.innerHTML = "";

    for(i = 0; i < customerList.length; i++){
        var curCustomer = customerList[i];
        output.innerHTML += i + ": " + curCustomer.greetformally() + "<br>";
    }
};

var clearInputs = function clearInputs(){
    salutation.value = "";
    FirstName.value = "";
    LastName.value = "";
}

enter.addEventListener("click", function(){
    if(FirstName.value == "" || LastName.value == ""){
        alert("Please enter First/Last name");
        return;
    }
    var newCustomer = new Customer(salutation.value, FirstName.value, LastName.value);

    customerList.push(newCustomer);

    clearInputs();
    renderCustomer();

})

LastName.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keycode === 13){
        enter.click();
    }
});/*this dosent work*/

clear.addEventListener("click", function(){
    customerList = [];
    clearInputs();
    renderCustomer();
})