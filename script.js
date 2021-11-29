
const tip = document.getElementById("5").innerHTML.charAt(0);
const five = document.getElementById("5");
const ten = document.getElementById("10");
const fifteen = document.getElementById("15");
const twentyFive = document.getElementById("25");
const fifty = document.getElementById("50");
const custom = document.getElementById("custom");
// const party = document.getElementById("partyCount");
const reset = document.getElementById("reset");
let tipAmountContainer = document.getElementById("tipAmount");
let totalContainer = document.getElementById("totalPerPerson");
let bill = parseFloat(document.getElementById("billAmount").value);
let temp = 0;
let people = document.getElementById("partyCount").value;
let tipTotal = 0;
let tipCalc = 0;
// 

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


custom.addEventListener("focusout", function(){
    let convertedNumber = "";
    if(document.getElementById("custom").value < 10){
        convertedNumber = ".0" + document.getElementById("custom").value;
        tipConversion(convertedNumber);
    }
    else
    tipConversion(parseInt(document.getElementById("custom").value));
})

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
function tipConversion(tipPercent){
    
    // bill = parseFloat(document.getElementById("billAmount").value);
    // tipTotal = Number(Math.round((bill * tipPercent) + "e2") + "e-2");
 
    // tipAmount.innerHTML = "$" + tipTotal;
    people = document.getElementById("partyCount").value; 
    // temp = (bill + tipTotal) / people;
    // tipCalc = Number(Math.round(temp + "e2") + "e-2");

    bill = parseFloat(document.getElementById("billAmount").value);
    tipAmount = bill * tipPercent;
    tipAmountContainer.innerHTML = formatter.format(tipAmount);
    // let temp = bill + tipTotal
    
    // console.log("type of bill: "+typeof(tipTotal))
    // tipCalc = formatter.format((bill + tipTotal)/people);
    tipCalc = bill + tipTotal;
    console.log("Tipcalc: "+tipCalc)
    // console.log("tipCalc: "+tipCalc)
    tipTotal = (bill + tipAmount)/people;
    // console.log("tipAmount: "+tipTotal)
    // formatter.format(tipTotal)
    // console.log(tipCalc);
    document.getElementById("totalPerPerson").innerHTML =formatter.format(tipTotal);
}

document.getElementById("partyCount").addEventListener("keyup", function(){
    if(document.getElementById("partyCount").value === '0'){
        document.getElementById("cat").style.color = "red";
        document.getElementById("error").style.display="block";
    }
    else{
        document.getElementById("cat").style.color = "hsl(186, 14%, 43%)";
        document.getElementById("error").style.display="none";
    }
})

reset.addEventListener("click", function(){
    document.getElementById("billAmount").value = "";
    document.getElementById("partyCount").value = "";
    document.getElementById("custom").value = "";
    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";

})



