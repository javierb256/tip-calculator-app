
const tip = document.getElementById("5").innerHTML.charAt(0);
const five = document.getElementById("5");
const ten = document.getElementById("10");
const fifteen = document.getElementById("15");
const twentyFive = document.getElementById("25");
const fifty = document.getElementById("50");
const custom = document.getElementById("custom");
const reset = document.getElementById("reset");
let tipAmountContainer = document.getElementById("tipAmount");
let totalContainer = document.getElementById("totalPerPerson");
let bill = parseFloat(document.getElementById("billAmount").value);
let temp = 0;
let people = document.getElementById("partyCount").value;
let tipTotal = 0;
let tipCalc = 0;

five.addEventListener("click", function(){
    tipConversion(.05);
});
ten.addEventListener("click", function(){
    tipConversion(.10);
});
fifteen.addEventListener("click", function(){
    tipConversion(.15);
});
twentyFive.addEventListener("click", function(){
    tipConversion(.25);
});
fifty.addEventListener("click", function(){
    tipConversion(.50);
});

//listener when keyup event is activated in custom area
custom.addEventListener("keyup", function(){
    let convertedNumber = "";
    if(document.getElementById("custom").value < 10){
        convertedNumber = ".0" + document.getElementById("custom").value;
        tipConversion(convertedNumber);
    }
    else{
        convertedNumber = "." + document.getElementById("custom").value;
        tipConversion(convertedNumber);
    }
})

//formats currency into proper format
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function tipConversion(tipPercent){
    people = document.getElementById("partyCount").value; 
    bill = parseFloat(document.getElementById("billAmount").value);
    tipAmount = bill * tipPercent;
    tipAmountContainer.innerHTML = formatter.format(tipAmount);
    tipCalc = bill + tipTotal;
    tipTotal = (bill + tipAmount)/people;
    document.getElementById("totalPerPerson").innerHTML =formatter.format(tipTotal);
}
//responds to invalid partyCount inputs
document.getElementById("partyCount").addEventListener("keyup", function(){
    if(document.getElementById("partyCount").value === '0'){
        document.getElementById("error").style.display="inline-block";
        document.getElementById("partyCount").style.border = "solid";
        document.getElementById("partyCount").style.borderColor = "red";
        
    }
    else{
        document.getElementById("peopleLabel").style.color = "hsl(186, 14%, 43%)";
        document.getElementById("error").style.display="none";
        document.getElementById("partyCount").style.border = "none";
    }
})

reset.addEventListener("click", function(){
    document.getElementById("billAmount").value = "";
    document.getElementById("partyCount").value = "";
    document.getElementById("custom").value = "";
    tipAmountContainer.innerHTML = "$0.00";
    totalContainer.innerHTML = "$0.00";

})



