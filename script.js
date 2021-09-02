function compute()
{
    var principal = document.getElementById("principal").value;
    
    //checks if the principal is positive then focuses of the field if not
    if (principal<=0)
    {  
        alert("Enter positive number");
        document.getElementById("principal").focus();
        return false;
    }

    //getting values of the different fields
    var rate = document.getElementById("rate").value;
    var years= document.getElementById("years").value;
    var interest = principal * years * rate/100;

    //the year the result amount will be
    var year= new Date().getFullYear()+parseInt(years); 
    var amount=Number(principal)+Number(interest);

    // putting the text inside the span with id result 
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function updateRate()
{
    //updates the rate value when user changes the rate bar
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        